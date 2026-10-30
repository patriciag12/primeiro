import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Globe, Heart, Sparkles, Compass, Sun, Leaf, Waves, CircleDot, Home as HomeIcon, Video, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { TestimonialList } from "@/components/testimonial-list";
import { ContactInvitation } from "@/components/contact-invitation";
import { contact, investment, journey, chakras } from "@/lib/site-content";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/radiestesia-pendulo.webp.asset.json";
import { MetatronPortrait } from "@/components/metatron-portrait";
import { BrandLogo } from "@/components/brand-logo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    ...pageHead("Millene Ferreira | Radiestesia Terapêutica Online", "Radiestesia terapêutica com Millene Ferreira. Cuidado vibracional individual, harmonização energética e atendimento 100% online para brasileiros no mundo todo.", "/"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "ProfessionalService", name: "Millene Ferreira — Terapeuta Vibracional Integrativa",
      description: "Radiestesia terapêutica com atendimento individual 100% online em português.", email: contact.email,
      areaServed: { "@type": "Place", name: "Atendimento online para brasileiros no mundo todo" },
      sameAs: [contact.instagram],
      address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA", addressCountry: "US" },
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Radiestesia terapêutica", itemListElement: [
        { "@type": "Offer", price: investment.entrance, priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Sessão de entrada" } },
        { "@type": "Offer", price: investment.emission, priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Sessão de emissão à distância" } },
      ] },
    }) }],
  }),
});

const moments = [
  { icon: Sun, title: "Baixa disposição", text: "Quando você sente que precisa recuperar o seu ritmo." },
  { icon: Waves, title: "Ciclos que se repetem", text: "Um espaço para olhar os padrões da sua história." },
  { icon: Compass, title: "Dificuldade de avançar", text: "Quando novas escolhas pedem mais clareza." },
  { icon: Heart, title: "Emoções guardadas", text: "Acolhimento para aquilo que ainda pesa em você." },
  { icon: CircleDot, title: "Mente agitada", text: "Uma pausa para se reconectar com o presente." },
  { icon: HomeIcon, title: "Ambientes carregados", text: "Um novo olhar para sua casa e seu trabalho." },
];

function Index() {
  return <>
    <section className="hero">
      <img className="hero-photo" src={hero.url} width={1920} height={1024} alt="Pêndulo de quartzo sobre um gráfico radiestésico, acompanhado de folhas de eucalipto" fetchPriority="high" decoding="async" />
      <div className="site-container hero-content relative z-10">
        <span className="eyebrow">Um cuidado que começa em você</span>
        <h1>Radiestesia <em>Terapêutica</em></h1>
        <span className="hero-name">com Millene Ferreira</span>
        <p className="hero-copy">Um caminho de clareza, equilíbrio e bem-estar.<br className="hidden sm:block" /> Do primeiro olhar vibracional à harmonia emocional.</p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="h-12 rounded-full px-6 text-xs"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Agendar pelo WhatsApp <ArrowUpRight /></a></Button>
          <Button asChild variant="link" className="h-12 px-0 text-xs"><Link to="/o-que-e-radiestesia">Conheça a radiestesia <ArrowRight /></Link></Button>
        </div>
        <div className="hero-meta"><span><Globe className="size-3.5" aria-hidden="true" /> Atendimento 100% Online</span><span><Heart className="size-3.5" aria-hidden="true" /> Cuidado individual & personalizado</span></div>
      </div>
      <span className="hero-index" aria-hidden="true">PRESENÇA · EQUILÍBRIO · BEM-ESTAR</span>
    </section>

    <section className="content-band border-b border-border bg-sage/55 py-7">
      <div className="site-container grid gap-5 sm:grid-cols-3">
        {[{ icon: Globe, title: "Sem fronteiras", text: "Brasileiros no mundo todo" }, { icon: Heart, title: "No seu ritmo", text: "Escuta e cuidado personalizado" }, { icon: Leaf, title: "Um olhar integral", text: "Corpo, emoções e autoconhecimento" }].map(item => <div key={item.title} className="flex items-center gap-4 sm:justify-center"><item.icon className="size-5 shrink-0 text-primary" strokeWidth={1.3} aria-hidden="true" /><div><p className="text-xs font-medium">{item.title}</p><p className="text-[10px] text-muted-foreground">{item.text}</p></div></div>)}
      </div>
    </section>

    <section className="content-band section-space">
      <div className="site-container grid items-center gap-12 md:grid-cols-[0.9fr_1.15fr] lg:gap-24">
        <MetatronPortrait />
        <div>
          <span className="eyebrow">Quem cuida de você</span>
          <h2 className="section-title">Prazer, eu sou<br /><em>Millene Ferreira.</em></h2>
          <p className="mt-5 text-[11px] font-medium uppercase text-primary">Terapeuta Vibracional Integrativa</p>
          <p className="mt-6 text-sm text-muted-foreground">Meu trabalho com a radiestesia terapêutica oferece um espaço de escuta, acolhimento e autoconhecimento. Um olhar sensível para o seu momento, respeitando a sua história e a sua individualidade.</p>
          <p className="mt-4 text-sm text-muted-foreground">Por meio do pêndulo, de tabelas e de gráficos radiestésicos, o cuidado é direcionado à harmonização dos chakras, da aura e dos corpos sutis, dentro da abordagem vibracional.</p>
          
          {/* Espectro das Cores dos 7 Chakras */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5" aria-label="Cores dos 7 Chakras">
            {chakras.map(c => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-2xs backdrop-blur-xs transition-transform hover:scale-105"
                title={`${c.name} (${c.sanskrit}): ${c.colorName} — ${c.location}`}
              >
                <span className="size-2.5 rounded-full shrink-0 shadow-xs" style={{ backgroundColor: c.colorHex }} />
                <span className="font-medium">{c.name}</span>
                <span className="text-[10px] text-muted-foreground font-normal">({c.colorName})</span>
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-2.5 border-t border-border pt-5 text-xs text-muted-foreground">
            <Globe className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              De San Diego (EUA) <span className="inline-block text-[1.1em] align-baseline leading-none" role="img" aria-label="Bandeira dos Estados Unidos">🇺🇸</span> para onde você estiver.
            </span>
          </div>
          <BrandLogo className="brand-logo-about mt-5" />
        </div>
      </div>
    </section>

    <section className="content-band section-space bg-rose/60">
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="eyebrow">Conhecendo a prática</span><h2 className="section-title max-w-xl">Um novo olhar para<br /><em>o seu equilíbrio.</em></h2></div><p className="max-w-sm text-sm text-muted-foreground">A radiestesia é uma prática complementar voltada ao cuidado vibracional e ao bem-estar.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Leitura radiestésica",
              text: "O pêndulo e as tabelas orientam um olhar individual para chakras, aura e corpos sutis, segundo a prática vibracional.",
              chakraBadges: true,
            },
            {
              icon: Sparkles,
              title: "Harmonização",
              text: "Gráficos radiestésicos e frequências são utilizados com a intenção de harmonizar o campo energético, de forma personalizada.",
            },
            {
              icon: Heart,
              title: "Cuidado & presença",
              text: "Um processo de escuta e acompanhamento que acolhe o seu momento e abre espaço para o autoconhecimento.",
            },
          ].map(item => (
            <article className="practice-card flex flex-col justify-between" key={item.title}>
              <div>
                <div className="practice-icon"><item.icon className="size-5" strokeWidth={1.4} aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              {item.chakraBadges && (
                <div className="mt-4 flex items-center gap-1 border-t border-border/60 pt-3" title="Os 7 chakras com suas cores correspondentes">
                  {chakras.map(c => (
                    <span key={c.name} className="size-2.5 rounded-full" style={{ backgroundColor: c.colorHex }} title={`${c.name}: ${c.colorName}`} />
                  ))}
                  <span className="ml-1.5 text-[10px] text-muted-foreground font-medium">7 chakras</span>
                </div>
              )}
            </article>
          ))}
        </div>
        <Button asChild variant="link" className="mt-7 px-0 text-xs"><Link to="/o-que-e-radiestesia">Entenda o que é radiestesia <ArrowRight /></Link></Button>
      </div>
    </section>

    <section className="content-band section-space">
      <div className="site-container">
        <div className="flex flex-col items-center text-center"><span className="eyebrow">Você se reconhece?</span><h2 className="section-title">Há momentos que pedem<br /><em>um pouco mais de cuidado.</em></h2><p className="mt-5 max-w-lg text-sm text-muted-foreground">Às vezes, uma pausa e um olhar acolhedor ajudam a perceber o que precisa de atenção na sua vida.</p></div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{moments.map(item => <article className="symptom-item" key={item.title}><item.icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.3} aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <p className="mt-5 text-[11px] text-muted-foreground">Sintomas persistentes merecem avaliação de um profissional de saúde. A radiestesia não substitui esse acompanhamento.</p>
      </div>
    </section>

    <section className="content-band section-space bg-sage/50">
      <div className="site-container">
        <span className="eyebrow">A sua jornada</span><h2 className="section-title">Cada caminho é único.<br /><em>O seu cuidado também.</em></h2>
        <div className="journey-grid">{journey.map((step, i) => <article key={step.title}><p className="journey-number">0{i + 1}</p><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-[11px] text-muted-foreground"><span className="flex items-center gap-2"><Video className="size-4" aria-hidden="true" /> 2 chamadas de vídeo: abertura e fechamento</span><span className="flex items-center gap-2"><WhatsAppIcon className="size-4" /> Acompanhamento pelo WhatsApp</span><span className="flex items-center gap-2"><Globe className="size-4" aria-hidden="true" /> Emissões à distância</span></div>
      </div>
    </section>

    <section className="content-band section-space">
      <div className="site-container">
        <div className="mb-9 flex flex-col items-center text-center"><span className="eyebrow">Espaço de depoimentos</span><h2 className="section-title">Histórias de cuidado<br /><em>e novos olhares.</em></h2><p className="mt-4 max-w-xl rounded-md border border-border bg-muted px-5 py-3 text-[11px] text-muted-foreground">Prévia: os relatos abaixo vieram do modelo enviado e ainda aguardam confirmação de autenticidade e autorização.</p></div>
        <TestimonialList />
        <div className="mt-8 flex justify-center"><Button asChild variant="outline" className="h-11 rounded-full px-7 text-xs"><Link to="/depoimentos">Ver todos os depoimentos <ArrowRight /></Link></Button></div>
      </div>
    </section>

    <section className="content-band section-space border-y border-border bg-rose/40">
      <div className="site-container grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div><span className="eyebrow">Investimento & formato</span><h2 className="section-title">Um cuidado pensado<br /><em>para o seu momento.</em></h2><p className="mt-5 max-w-sm text-sm text-muted-foreground">A quantidade de sessões de emissão é definida conforme a avaliação radiestésica. O processo é individual e 100% a distância.</p><Button asChild variant="link" className="mt-5 px-0 text-xs"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Converse sobre o seu tratamento <ArrowUpRight /></a></Button></div>
        <div><table className="investment-table"><caption className="sr-only">Investimento em dólares americanos</caption><tbody><tr><td><span className="font-medium">Sessão de entrada</span><small>Análise radiestésica e harmonização inicial</small></td><td>US$ {investment.entrance}</td></tr><tr><td><span className="font-medium">Sessão de emissão</span><small>Realizada à distância, off-line</small></td><td>US$ {investment.emission}<small>por sessão</small></td></tr><tr><td><span className="font-medium">Corte energético</span><small>Possibilidade avaliada individualmente</small></td><td>US$ {investment.cutStandalone}<small>US$ {investment.cutInTreatment} em tratamento</small></td></tr><tr><td><span className="font-medium">Chamada de fechamento</span><small>Devolutiva e relatório final</small></td><td><span className="flex items-center justify-end gap-2 font-sans text-sm"><Check className="size-4" aria-hidden="true" /> Incluída</span></td></tr></tbody></table><p className="mt-4 text-[10px] text-muted-foreground">Valores em dólares americanos (USD). Confirme as condições e possibilidades com a terapeuta.</p></div>
      </div>
    </section>

    <section className="content-band section-space">
      <div className="site-container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20"><div><span className="eyebrow">Dúvidas frequentes</span><h2 className="section-title">Antes do<br /><em>primeiro passo.</em></h2></div>
        <Accordion type="single" collapsible>
          <AccordionItem value="online"><AccordionTrigger className="text-sm">Como funciona o atendimento online?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">O processo é realizado 100% a distância, com contato pelo WhatsApp, emissões off-line e duas chamadas de vídeo: uma de abertura e outra de fechamento. Você pode estar em qualquer lugar do mundo.</AccordionContent></AccordionItem>
          <AccordionItem value="sessions"><AccordionTrigger className="text-sm">Quantas sessões são necessárias?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">Não existe uma quantidade fixa para todos. A avaliação radiestésica orienta o número de emissões e as prioridades, de acordo com o seu momento.</AccordionContent></AccordionItem>
          <AccordionItem value="health"><AccordionTrigger className="text-sm">A radiestesia substitui tratamento médico?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">Não. É uma prática complementar, sem comprovação científica de eficácia para diagnosticar ou tratar doenças. Não substitui acompanhamento médico ou psicológico e não deve ser usada para interromper tratamentos.</AccordionContent></AccordionItem>
          <AccordionItem value="language"><AccordionTrigger className="text-sm">Posso fazer as sessões morando fora do Brasil?</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">Sim. As sessões individuais são em português e destinadas a brasileiros no mundo todo. Os horários são combinados diretamente com a Millene, respeitando o seu fuso.</AccordionContent></AccordionItem>
        </Accordion>
      </div>
    </section>
    <ContactInvitation />
  </>;
}
