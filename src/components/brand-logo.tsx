import { cn } from "@/lib/utils";
import compactLogo from "@/assets/millene-logo-640.webp.asset.json";
import largeLogo from "@/assets/millene-logo-1200.webp.asset.json";

export function BrandLogo({ className, eager = false }: { className?: string; eager?: boolean }) {
  return <img
    src={compactLogo.url}
    srcSet={`${compactLogo.url} 640w, ${largeLogo.url} 1200w`}
    sizes="(max-width: 767px) 205px, 280px"
    width={640}
    height={234}
    alt="Millene Ferreira — Terapeuta Vibracional Integrativa, assinatura dourada com lótus"
    loading={eager ? "eager" : "lazy"}
    decoding="async"
    className={cn("brand-logo", className)}
  />;
}