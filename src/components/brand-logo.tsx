import { cn } from "@/lib/utils";

export function BrandLogo({ className, eager = false }: { className?: string; eager?: boolean }) {
  return (
    <img
      src="/millene-logo-640.webp"
      srcSet="/millene-logo-640.webp 640w, /millene-logo-1200.webp 1200w"
      sizes="(max-width: 767px) 205px, 280px"
      width={640}
      height={234}
      alt="Millene Ferreira — Terapeuta Vibracional Integrativa, assinatura dourada com lótus"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("brand-logo", className)}
    />
  );
}
