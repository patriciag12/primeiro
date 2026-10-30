import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Globe, Heart, Sparkles, Compass, Sun, Leaf, Waves, CircleDot, Home as HomeIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { TestimonialList } from "@/components/testimonial-list";
import { ContactInvitation } from "@/components/contact-invitation";
import { contact, chakras } from "@/lib/site-content";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/radiestesia-pendulo.webp.asset.json";
import { MetatronPortrait } from "@/components/metatron-portrait";
import { BrandLogo } from "@/components/brand-logo";
import { useLang } from "@/lib/lang-context";

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
    }) }],
  }),
});

function Index() {
  const { t } = useLang();

  const moments = [
    { icon: Sun,       title: t("moments.lowEnergy"),    text: t("moments.lowEnergyT") },
    { icon: Waves,     title: t("moments.patterns"),     text: t("moments.patternsT") },
    { icon: Compass,   title: t("moments.stuck"),        text: t("moments.stuckT") },
    { icon: Heart,     title: t("moments.emotions"),     text: t("moments.emotionsT") },
    { icon: CircleDot, title: t("moments.mind"),         text: t("moments.mindT") },
    { icon: HomeIcon,  title: t("moments.environment"),  text: t("moments.environmentT") },
  ];

  const practiceCards = [
    { icon: Compass,  title: t("practice.readTitle"),  text: t("practice.readText"),  chakraBadges: true },
    { icon: Sparkles, title: t("practice.harmTitle"),  text: t("practice.harmText"),  chakraBadges: false },
    { icon: Heart,    title: t("practice.careTitle"),  text: t("practice.careText"),  chakraBadges: false },
  ];

  const journeySteps = [
    { title: t("journey.step1Title"), text: t("journey.step1Text") },
    { title: t("journey.step2Title"), text: t("journey.step2Text") },
    { title: t("journey.step3Title"), text: t("journey.step3Text") },
    { title: t("journey.step4Title"), text: t("journey.step4Text") },
  ];

  return <>
    <section className="hero">
      <img className="hero-photo" src={hero.url} width={1920} height={1024} alt="Pêndulo de quartzo sobre um gráfico radiestésico, acompanhado de folhas de eucalipto" fetchPriority="high" decoding="async" />
      <div className="site-container hero-content relative z-10">
        <span className="eyebrow">{t("hero.eyebrow")}</span>
        <h1>Radiestesia <em>Terapêutica</em></h1>
        <span className="hero-name">{t("hero.name")}</span>
        <p className="hero-copy">{t("hero.copy")}</p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="h-12 rounded-full px-6 text-xs"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {t("hero.cta")} <ArrowUpRight /></a></Button>
          <Button asChild variant="link" className="h-12 px-0 text-xs"><Link to="/o-que-e-radiestesia">{t("hero.learn")} <ArrowRight /></Link></Button>
        </div>
        <div className="hero-meta"><span><Globe className="size-3.5" aria-hidden="true" /> {t("hero.online")}</span><span><Heart className="size-3.5" aria-hidden="true" /> {t("hero.personal")}</span></div>
      </div>
      <span className="hero-index" aria-hidden="true">{t("hero.ticker")}</span>
    </section>

    <section className="content-band section-divider border-b border-border bg-sage/55 py-7">
      <div className="site-container grid gap-5 sm:grid-cols-3">
        {[
          { icon: Globe, title: t("trust.borderless"),  text: t("trust.borderlessT") },
          { icon: Heart, title: t("trust.rhythm"),      text: t("trust.rhythmT") },
          { icon: Leaf,  title: t("trust.integral"),    text: t("trust.integralT") },
        ].map(item => <div key={item.title} className="flex items-center gap-4 sm:justify-center"><item.icon className="size-5 shrink-0 text-primary" strokeWidth={1.3} aria-hidden="true" /><div><p className="text-xs font-medium">{item.title}</p><p className="text-[10px] text-muted-foreground">{item.text}</p></div></div>)}
      </div>
    </section>

    <section className="content-band section-divider section-space">
      <div className="site-container grid items-center gap-12 md:grid-cols-[0.9fr_1.15fr] lg:gap-24">
        <MetatronPortrait />
        <div>
          <span className="eyebrow">{t("about.eyebrow")}</span>
          <h2 className="section-title">{t("about.title1")}<br /><em>{t("about.titleEm")}</em></h2>
          <p className="mt-5 text-[11px] font-medium uppercase text-primary">{t("about.subtitle")}</p>
          <p className="mt-6 text-sm text-muted-foreground">{t("about.p1")}</p>
          <p className="mt-4 text-sm text-muted-foreground">{t("about.p2")}</p>

          <div className="mt-7 flex items-center gap-2.5 border-t border-border pt-5 text-xs text-muted-foreground">
            <Globe className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {t("about.location")} <span className="inline-block text-[1.1em] align-baseline leading-none" role="img" aria-label="Bandeira dos Estados Unidos">🇺🇸</span> {t("about.locationSuffix")}
            </span>
          </div>
          <BrandLogo className="brand-logo-about mt-5" />
        </div>
      </div>
    </section>

    <section className="content-band section-divider section-space bg-rose/60">
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="eyebrow">{t("practice.eyebrow")}</span><h2 className="section-title max-w-xl">{t("practice.title")}<br /><em>{t("practice.titleEm")}</em></h2></div><p className="max-w-sm text-sm text-muted-foreground">{t("practice.lead")}</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {practiceCards.map(item => (
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
        <Button asChild variant="link" className="mt-7 px-0 text-xs"><Link to="/o-que-e-radiestesia">{t("practice.link")} <ArrowRight /></Link></Button>
      </div>
    </section>

    <section className="content-band section-divider section-space">
      <div className="site-container">
        <div className="flex flex-col items-center text-center"><span className="eyebrow">{t("moments.eyebrow")}</span><h2 className="section-title">{t("moments.title")}<br /><em>{t("moments.titleEm")}</em></h2><p className="mt-5 max-w-lg text-sm text-muted-foreground">{t("moments.lead")}</p></div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{moments.map(item => <article className="symptom-item" key={item.title}><item.icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.3} aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <p className="mt-5 text-[11px] text-muted-foreground">{t("moments.disclaimer")}</p>
      </div>
    </section>

    <section className="content-band section-divider section-space bg-sage/50">
      <div className="site-container">
        <span className="eyebrow">{t("journey.eyebrow")}</span><h2 className="section-title">{t("journey.title")}<br /><em>{t("journey.titleEm")}</em></h2>
        <div className="journey-grid">{journeySteps.map((step, i) => <article key={step.title}><p className="journey-number">0{i + 1}</p><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-[11px] text-muted-foreground"><span className="flex items-center gap-2"><Video className="size-4" aria-hidden="true" /> {t("journey.video")}</span><span className="flex items-center gap-2"><WhatsAppIcon className="size-4" /> {t("journey.whatsapp")}</span><span className="flex items-center gap-2"><Globe className="size-4" aria-hidden="true" /> {t("journey.online")}</span></div>
      </div>
    </section>

    <section className="content-band section-divider section-space">
      <div className="site-container">
        <div className="mb-9 flex flex-col items-center text-center"><span className="eyebrow">{t("testimonials.eyebrow")}</span><h2 className="section-title">{t("testimonials.title")}<br /><em>{t("testimonials.titleEm")}</em></h2><p className="mt-4 max-w-xl rounded-md border border-border bg-muted px-5 py-3 text-[11px] text-muted-foreground">{t("testimonials.notice")}</p></div>
        <TestimonialList />
        <div className="mt-8 flex justify-center"><Button asChild variant="outline" className="h-11 rounded-full px-7 text-xs"><Link to="/depoimentos">{t("testimonials.seeAll")} <ArrowRight /></Link></Button></div>
      </div>
    </section>

    <section className="content-band section-divider section-space">
      <div className="site-container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20"><div><span className="eyebrow">{t("faq.eyebrow")}</span><h2 className="section-title">{t("faq.title")}<br /><em>{t("faq.titleEm")}</em></h2></div>
        <Accordion type="single" collapsible>
          <AccordionItem value="online"><AccordionTrigger className="text-sm">{t("faq.q1")}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{t("faq.a1")}</AccordionContent></AccordionItem>
          <AccordionItem value="sessions"><AccordionTrigger className="text-sm">{t("faq.q2")}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{t("faq.a2")}</AccordionContent></AccordionItem>
          <AccordionItem value="health"><AccordionTrigger className="text-sm">{t("faq.q3")}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{t("faq.a3")}</AccordionContent></AccordionItem>
          <AccordionItem value="language"><AccordionTrigger className="text-sm">{t("faq.q4")}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{t("faq.a4")}</AccordionContent></AccordionItem>
        </Accordion>
      </div>
    </section>
    <ContactInvitation />
  </>;
}
