import { createFileRoute, Link } from "@tanstack/react-router";
import { TestimonialList } from "@/components/testimonial-list";
import { ContactInvitation } from "@/components/contact-invitation";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/depoimentos")({
  component: TestimonialsPage,
  head: () => pageHead("Depoimentos | Atendimento com Millene Ferreira", "Espaço de depoimentos sobre o cuidado vibracional online com Millene Ferreira. Relatos do modelo em revisão, aguardando confirmação e autorização.", "/depoimentos", true),
});

function TestimonialsPage() {
  return <>
    <header className="content-band article-header"><div className="site-container"><div className="flex items-center gap-2 text-[11px] text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link><span>/</span><span>Depoimentos</span></div><span className="eyebrow mt-8">Histórias de cuidado</span><h1>Depoimentos<br /><em className="text-primary">& experiências.</em></h1><p className="article-lead">Cada pessoa tem uma história. Cada experiência de cuidado é individual.</p></div></header>
    <section className="content-band section-space"><div className="site-container"><div className="mb-8 border-l-2 border-primary bg-muted px-6 py-5"><h2 className="font-sans text-sm font-medium">Relatos em revisão</h2><p className="mt-2 text-xs text-muted-foreground">Os textos abaixo fazem parte do modelo de site enviado. Ainda não foram confirmados como depoimentos reais nem autorizados para divulgação. Esta página permanece fora da indexação enquanto aguarda essa confirmação.</p></div><TestimonialList /><p className="mt-8 max-w-3xl text-xs text-muted-foreground">Os relatos não representam resultados garantidos nem evidência de eficácia clínica. A radiestesia é uma prática complementar e não substitui diagnóstico ou acompanhamento médico e psicológico.</p></div></section>
    <ContactInvitation />
  </>;
}