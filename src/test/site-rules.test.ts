import { describe, expect, it } from "vitest";
import { contact, investment } from "@/lib/site-content";
import { protectResponse } from "@/lib/security-headers";

describe("Supplied contacts and investment", () => {
  it("uses the exact WhatsApp destination supplied by Patricia", () => { expect(contact.whatsapp).toBe("https://bit.ly/MilleneFerreiraTerapeuta"); });
  it("uses Millene's email", () => { expect(contact.email).toBe("milleneferreiraterapeuta@gmail.com"); });
  it("uses the supplied Instagram account", () => { expect(new URL(contact.instagram).pathname).toBe("/millenefds/"); });
  it("keeps the entrance session at US$150 from the supplied PDF", () => { expect(investment.entrance).toBe(150); });
  it("keeps each emission at US$90 from the supplied PDF", () => { expect(investment.emission).toBe(90); });
  it("keeps the standalone cut at US$140 from the supplied PDF", () => { expect(investment.cutStandalone).toBe(140); });
  it("keeps the treatment cut at US$90 from the supplied PDF", () => { expect(investment.cutInTreatment).toBe(90); });
});

describe("Response protection", () => {
  it("prevents plugin execution and form submissions while allowing Lovable preview embeds", () => {
    const r = protectResponse(new Response("ok"), "https://example.test/");
    expect(r.headers.get("Content-Security-Policy")).toContain("object-src 'none'");
    expect(r.headers.get("Content-Security-Policy")).toContain("form-action 'none'");
    expect(r.headers.get("Content-Security-Policy")).toContain("https://lovable.dev");
    expect(r.headers.get("X-Content-Type-Options")).toBe("nosniff");
  });
  it("preserves response status and body", async () => {
    const r = protectResponse(new Response("not found", { status: 404 }), "http://localhost:8080/");
    expect(r.status).toBe(404); expect(await r.text()).toBe("not found");
    expect(r.headers.has("Strict-Transport-Security")).toBe(false);
  });
});