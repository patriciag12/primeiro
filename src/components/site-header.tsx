import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/site-content";
import { BrandLogo } from "@/components/brand-logo";
import { useLang } from "@/lib/lang-context";

export function SiteHeader() {
  const { lang, toggle, t } = useLang();

  return (
    <header className="site-header">
      <div className="chakra-strip" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div>
      <div className="site-container header-inner">
        <Link to="/" aria-label="Millene Ferreira — início" className="header-brand"><BrandLogo eager /></Link>
        <nav aria-label="Navegação principal" className="header-nav">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>{t("nav.home")}</Link>
          <Link to="/o-que-e-radiestesia" className="nav-link">{t("nav.radiestesia")}</Link>
          <Link to="/depoimentos" className="nav-link">{t("nav.testimonials")}</Link>
        </nav>
        <div className="header-actions">
          <Button variant="ghost" size="sm"
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            className="lang-toggle"
          >
            <span className={lang === "pt" ? "lang-active" : ""}>PT</span>
            <span className="lang-sep">|</span>
            <span className={lang === "en" ? "lang-active" : ""}>EN</span>
          </Button>
          <Button asChild size="sm" className="header-schedule rounded-full"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {t("nav.schedule")}</a></Button>
        </div>
      </div>
    </header>
  );
}
