import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/site-content";

export function ContactInvitation() {
  return <section className="content-band section-space bg-sage/60">
    <div className="site-container flex flex-col items-center text-center">
      <span className="eyebrow">Um convite para você</span>
      <h2 className="section-title max-w-xl">Permita-se olhar para <em>a sua energia.</em></h2>
      <p className="mt-5 max-w-lg text-sm text-muted-foreground">Um cuidado gentil, individual e a distância. Converse com a Millene e conheça as possibilidades para o seu momento.</p>
      <Button asChild size="lg" className="mt-7 h-12 rounded-full px-7"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Conversar com a Millene</a></Button>
      <p className="mt-4 text-[11px] text-muted-foreground">Atendimento 100% Online · Em português, onde você estiver</p>
    </div>
  </section>;
}