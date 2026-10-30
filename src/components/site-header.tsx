import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/site-content";
import { BrandLogo } from "@/components/brand-logo";
import { useLang } from "@/lib/lang-context";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  return (
    <header className="site-header">
      <div className="chakra-strip" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div>
      <div className="site-container header-inner">
        <Link to="/" aria-label="Millene Ferreira — início" onClick={() => setOpen(false)} className="shrink-0"><BrandLogo eager /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>{t("nav.home")}</Link>
          <Link to="/o-que-e-radiestesia" className="nav-link">{t("nav.radiestesia")}</Link>
          <Link to="/depoimentos" className="nav-link">{t("nav.testimonials")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          {/* Botão de troca de idioma PT / EN */}
          <button
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            className="lang-toggle"
          >
            <span className={lang === "pt" ? "lang-active" : ""}>PT</span>
            <span className="lang-sep">|</span>
            <span className={lang === "en" ? "lang-active" : ""}>EN</span>
          </button>
          <Button asChild className="hidden h-10 rounded-full px-5 text-xs sm:inline-flex"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {t("nav.schedule")} <ArrowUpRight className="size-3" /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav id="mobile-nav" aria-label="Navegação móvel" className="border-t border-border bg-background py-5 lg:hidden">
        <div className="site-container flex flex-col items-start gap-4">
          <Link to="/" className="nav-link" onClick={() => setOpen(false)} activeOptions={{ exact: true }}>{t("nav.home")}</Link>
          <Link to="/o-que-e-radiestesia" className="nav-link" onClick={() => setOpen(false)}>{t("nav.radiestesia")}</Link>
          <Link to="/depoimentos" className="nav-link" onClick={() => setOpen(false)}>{t("nav.testimonials")}</Link>
          <Button asChild size="sm" className="rounded-full"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {t("nav.schedule")}</a></Button>
        </div>
      </nav>}
    </header>
  );
}
