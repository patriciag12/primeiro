import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact, disclaimer } from "@/lib/site-content";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return <>
    <footer className="site-footer">
      <div className="site-container relative z-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_1.1fr]">
          <div><Link to="/" aria-label="Millene Ferreira — início"><BrandLogo className="brand-logo-footer" /></Link><p className="mt-5 max-w-xs text-xs opacity-75">Um olhar sensível. Um cuidado individual.<br />Um caminho de volta para você.</p></div>
          <div><p className="footer-title">Explore</p><nav aria-label="Navegação do rodapé" className="flex flex-col items-start gap-3 text-xs"><Link to="/">Home</Link><Link to="/o-que-e-radiestesia">O que é Radiestesia?</Link><Link to="/depoimentos">Depoimentos</Link></nav></div>
          <div><p className="footer-title">Vamos conversar</p><div className="flex flex-col gap-4">
            <a className="footer-contact" href={`mailto:${contact.email}`}><Mail className="size-4" aria-hidden="true" />{contact.email}</a>
            <a className="footer-contact" href={contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="size-4" aria-hidden="true" />@millenefds <ArrowUpRight className="size-3" aria-hidden="true" /></a>
            <a className="footer-contact" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-4" />WhatsApp <ArrowUpRight className="size-3" aria-hidden="true" /></a>
          </div></div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-footer-foreground/15 pt-6 text-xs sm:flex-row"><span className="flex items-center gap-2"><Globe className="size-4" aria-hidden="true" />Atendimento 100% Online</span><span>Sessões individuais para brasileiros no mundo todo</span></div>
        <p className="mt-6 max-w-4xl text-[10px] leading-relaxed opacity-60">{disclaimer}</p>
        <div className="mt-7 border-t border-footer-foreground/15 pt-5 text-[10px] opacity-70">© 2026 Millene Ferreira — San Diego, Califórnia (EUA) <span className="inline-block text-[1.1em] align-baseline leading-none" role="img" aria-label="Bandeira dos Estados Unidos">🇺🇸</span></div>
      </div>
    </footer>
    <Button asChild variant="whatsapp" size="icon" className="floating-whatsapp [&_svg]:size-6"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com Millene no WhatsApp" title="Falar com Millene no WhatsApp"><WhatsAppIcon /></a></Button>
  </>;
}
