import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="chakra-strip" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div>
    <div className="site-container header-inner">
      <Link to="/" aria-label="Millene Ferreira — início" onClick={() => setOpen(false)} className="shrink-0"><span className="brand-name">Millene Ferreira</span><span className="brand-subtitle">Terapeuta Vibracional Integrativa</span></Link>
      <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
        <Link to="/" className="nav-link" activeOptions={{ exact: true }}>Home</Link>
        <Link to="/o-que-e-radiestesia" className="nav-link">O que é Radiestesia?</Link>
        <Link to="/depoimentos" className="nav-link">Depoimentos</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild className="hidden h-10 rounded-full px-5 text-xs sm:inline-flex"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Agendar sessão <ArrowUpRight className="size-3" /></a></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav id="mobile-nav" aria-label="Navegação móvel" className="border-t border-border bg-background py-5 lg:hidden">
      <div className="site-container flex flex-col items-start gap-4">
        <Link to="/" className="nav-link" onClick={() => setOpen(false)} activeOptions={{ exact: true }}>Home</Link>
        <Link to="/o-que-e-radiestesia" className="nav-link" onClick={() => setOpen(false)}>O que é Radiestesia?</Link>
        <Link to="/depoimentos" className="nav-link" onClick={() => setOpen(false)}>Depoimentos</Link>
        <Button asChild size="sm" className="rounded-full"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Agendar sessão</a></Button>
      </div>
    </nav>}
  </header>;
}