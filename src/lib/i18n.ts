// Dicionário bilíngue PT / EN
// Adicione novas chaves aqui sempre que precisar de texto traduzível.

export type Lang = "pt" | "en";

export const translations = {
  /* ── Header ─────────────────────────────────────────────────── */
  "nav.home":            { pt: "Home",             en: "Home" },
  "nav.radiestesia":     { pt: "O que é Radiestesia?", en: "What is Radiesthesia?" },
  "nav.testimonials":    { pt: "Depoimentos",      en: "Testimonials" },
  "nav.schedule":        { pt: "Agendar sessão",   en: "Book a session" },

  /* ── Hero ────────────────────────────────────────────────────── */
  "hero.eyebrow":        { pt: "Um cuidado que começa em você",    en: "Care that starts with you" },
  "hero.title1":         { pt: "Radiestesia",                      en: "Therapeutic" },
  "hero.titleEm":        { pt: "Terapêutica",                      en: "Radiesthesia" },
  "hero.name":           { pt: "com Millene Ferreira",             en: "with Millene Ferreira" },
  "hero.copy":           { pt: "Um caminho de clareza, equilíbrio e bem-estar. Do primeiro olhar vibracional à harmonia emocional.", en: "A path of clarity, balance and well-being. From the first vibrational reading to emotional harmony." },
  "hero.cta":            { pt: "Agendar pelo WhatsApp",            en: "Book via WhatsApp" },
  "hero.learn":          { pt: "Conheça a radiestesia",            en: "Learn about radiesthesia" },
  "hero.online":         { pt: "Atendimento 100% Online",          en: "100 % Online sessions" },
  "hero.personal":       { pt: "Cuidado individual & personalizado", en: "Individual & personalised care" },
  "hero.ticker":         { pt: "PRESENÇA · EQUILÍBRIO · BEM-ESTAR", en: "PRESENCE · BALANCE · WELL-BEING" },

  /* ── Trust bar ───────────────────────────────────────────────── */
  "trust.borderless":    { pt: "Sem fronteiras",          en: "No borders" },
  "trust.borderlessT":   { pt: "Brasileiros no mundo todo", en: "Brazilians worldwide" },
  "trust.rhythm":        { pt: "No seu ritmo",             en: "At your pace" },
  "trust.rhythmT":       { pt: "Escuta e cuidado personalizado", en: "Attentive & personalised care" },
  "trust.integral":      { pt: "Um olhar integral",        en: "A holistic view" },
  "trust.integralT":     { pt: "Corpo, emoções e autoconhecimento", en: "Body, emotions & self-awareness" },

  /* ── About ───────────────────────────────────────────────────── */
  "about.eyebrow":       { pt: "Quem cuida de você",      en: "Who takes care of you" },
  "about.title1":        { pt: "Prazer, eu sou",           en: "Hi, I'm" },
  "about.titleEm":       { pt: "Millene Ferreira.",        en: "Millene Ferreira." },
  "about.subtitle":      { pt: "Terapeuta Vibracional Integrativa", en: "Integrative Vibrational Therapist" },
  "about.p1":            { pt: "Meu trabalho com a radiestesia terapêutica oferece um espaço de escuta, acolhimento e autoconhecimento. Um olhar sensível para o seu momento, respeitando a sua história e a sua individualidade.", en: "My work with therapeutic radiesthesia offers a space for listening, welcoming and self-knowledge. A sensitive look at your moment, respecting your story and your individuality." },
  "about.p2":            { pt: "Por meio do pêndulo, de tabelas e de gráficos radiestésicos, o cuidado é direcionado à harmonização dos chakras, da aura e dos corpos sutis, dentro da abordagem vibracional.", en: "Through the pendulum, tables and radiesthetic charts, care is directed at harmonising the chakras, the aura and the subtle bodies, within the vibrational approach." },
  "about.location":      { pt: "De San Diego (EUA)",       en: "From San Diego (USA)" },
  "about.locationSuffix":{ pt: "para onde você estiver.",  en: "to wherever you are." },

  /* ── Practice ────────────────────────────────────────────────── */
  "practice.eyebrow":    { pt: "Conhecendo a prática",     en: "Getting to know the practice" },
  "practice.title":      { pt: "Um novo olhar para",       en: "A new perspective on" },
  "practice.titleEm":    { pt: "o seu equilíbrio.",         en: "your balance." },
  "practice.lead":       { pt: "A radiestesia é uma prática complementar voltada ao cuidado vibracional e ao bem-estar.", en: "Radiesthesia is a complementary practice focused on vibrational care and well-being." },
  "practice.readTitle":  { pt: "Leitura radiestésica",     en: "Radiesthetic reading" },
  "practice.readText":   { pt: "O pêndulo e as tabelas orientam um olhar individual para chakras, aura e corpos sutis, segundo a prática vibracional.", en: "The pendulum and tables guide an individual view of the chakras, aura and subtle bodies, according to vibrational practice." },
  "practice.harmTitle":  { pt: "Harmonização",             en: "Harmonisation" },
  "practice.harmText":   { pt: "Gráficos radiestésicos e frequências são utilizados com a intenção de harmonizar o campo energético, de forma personalizada.", en: "Radiesthetic charts and frequencies are used with the intention of harmonising the energetic field, in a personalised way." },
  "practice.careTitle":  { pt: "Cuidado & presença",       en: "Care & presence" },
  "practice.careText":   { pt: "Um processo de escuta e acompanhamento que acolhe o seu momento e abre espaço para o autoconhecimento.", en: "A process of listening and follow-up that embraces your moment and opens space for self-knowledge." },
  "practice.link":       { pt: "Entenda o que é radiestesia", en: "Understand what radiesthesia is" },

  /* ── Moments ─────────────────────────────────────────────────── */
  "moments.eyebrow":     { pt: "Você se reconhece?",       en: "Do you recognise yourself?" },
  "moments.title":       { pt: "Há momentos que pedem",    en: "There are moments that call for" },
  "moments.titleEm":     { pt: "um pouco mais de cuidado.", en: "a little more care." },
  "moments.lead":        { pt: "Às vezes, uma pausa e um olhar acolhedor ajudam a perceber o que precisa de atenção na sua vida.", en: "Sometimes a pause and a welcoming look help you notice what needs attention in your life." },
  "moments.disclaimer":  { pt: "Sintomas persistentes merecem avaliação de um profissional de saúde. A radiestesia não substitui esse acompanhamento.", en: "Persistent symptoms deserve evaluation by a healthcare professional. Radiesthesia does not replace that care." },
  "moments.lowEnergy":   { pt: "Baixa disposição",         en: "Low energy" },
  "moments.lowEnergyT":  { pt: "Quando você sente que precisa recuperar o seu ritmo.", en: "When you feel you need to recover your rhythm." },
  "moments.patterns":    { pt: "Ciclos que se repetem",    en: "Repeating patterns" },
  "moments.patternsT":   { pt: "Um espaço para olhar os padrões da sua história.", en: "A space to look at the patterns of your story." },
  "moments.stuck":       { pt: "Dificuldade de avançar",   en: "Difficulty moving forward" },
  "moments.stuckT":      { pt: "Quando novas escolhas pedem mais clareza.", en: "When new choices call for more clarity." },
  "moments.emotions":    { pt: "Emoções guardadas",        en: "Stored emotions" },
  "moments.emotionsT":   { pt: "Acolhimento para aquilo que ainda pesa em você.", en: "Support for what still weighs on you." },
  "moments.mind":        { pt: "Mente agitada",            en: "Restless mind" },
  "moments.mindT":       { pt: "Uma pausa para se reconectar com o presente.", en: "A pause to reconnect with the present." },
  "moments.environment": { pt: "Ambientes carregados",     en: "Charged environments" },
  "moments.environmentT":{ pt: "Um novo olhar para sua casa e seu trabalho.", en: "A new perspective on your home and workplace." },

  /* ── Journey ─────────────────────────────────────────────────── */
  "journey.eyebrow":     { pt: "A sua jornada",            en: "Your journey" },
  "journey.title":       { pt: "Cada caminho é único.",    en: "Every path is unique." },
  "journey.titleEm":     { pt: "O seu cuidado também.",    en: "So is your care." },
  "journey.step1Title":  { pt: "Escuta & leitura",         en: "Listening & reading" },
  "journey.step1Text":   { pt: "Uma análise radiestésica e uma chamada de abertura para acolher sua história e compreender o seu momento.", en: "A radiesthetic analysis and an opening call to welcome your story and understand your moment." },
  "journey.step2Title":  { pt: "Cuidado personalizado",    en: "Personalised care" },
  "journey.step2Text":   { pt: "Definição de prioridades e emissões de gráficos à distância, respeitando sua individualidade e seu ritmo.", en: "Setting priorities and remote chart transmissions, respecting your individuality and pace." },
  "journey.step3Title":  { pt: "Acompanhamento",           en: "Follow-up" },
  "journey.step3Text":   { pt: "Contato semanal pelo WhatsApp, em texto e áudio, durante o processo de harmonização.", en: "Weekly WhatsApp contact, in text and audio, throughout the harmonisation process." },
  "journey.step4Title":  { pt: "Integração & fechamento",  en: "Integration & closing" },
  "journey.step4Text":   { pt: "Uma chamada de fechamento, devolutiva e relatório final para integrar a sua experiência.", en: "A closing call, feedback session and final report to integrate your experience." },
  "journey.video":       { pt: "2 chamadas de vídeo: abertura e fechamento", en: "2 video calls: opening and closing" },
  "journey.whatsapp":    { pt: "Acompanhamento pelo WhatsApp", en: "WhatsApp follow-up" },
  "journey.online":      { pt: "Emissões à distância",     en: "Remote transmissions" },

  /* ── Testimonials ────────────────────────────────────────────── */
  "testimonials.eyebrow":{ pt: "Espaço de depoimentos",   en: "Testimonials" },
  "testimonials.title":  { pt: "Histórias de cuidado",     en: "Stories of care" },
  "testimonials.titleEm":{ pt: "e novos olhares.",         en: "and new perspectives." },
  "testimonials.notice": { pt: "Prévia: os relatos abaixo vieram do modelo enviado e ainda aguardam confirmação de autenticidade e autorização.", en: "Preview: the testimonials below came from the submitted model and are still awaiting authenticity confirmation and authorisation." },
  "testimonials.seeAll": { pt: "Ver todos os depoimentos", en: "See all testimonials" },

  /* ── FAQ ─────────────────────────────────────────────────────── */
  "faq.eyebrow":         { pt: "Dúvidas frequentes",       en: "Frequently asked questions" },
  "faq.title":           { pt: "Antes do",                 en: "Before your" },
  "faq.titleEm":         { pt: "primeiro passo.",          en: "first step." },
  "faq.q1":              { pt: "Como funciona o atendimento online?", en: "How does the online session work?" },
  "faq.a1":              { pt: "O processo é realizado 100% a distância, com contato pelo WhatsApp, emissões off-line e duas chamadas de vídeo: uma de abertura e outra de fechamento. Você pode estar em qualquer lugar do mundo.", en: "The process is 100 % remote, with WhatsApp contact, off-line transmissions and two video calls: one opening and one closing. You can be anywhere in the world." },
  "faq.q2":              { pt: "Quantas sessões são necessárias?", en: "How many sessions are needed?" },
  "faq.a2":              { pt: "Não existe uma quantidade fixa para todos. A avaliação radiestésica orienta o número de emissões e as prioridades, de acordo com o seu momento.", en: "There is no fixed number for everyone. The radiesthetic assessment guides the number of transmissions and priorities, according to your moment." },
  "faq.q3":              { pt: "A radiestesia substitui tratamento médico?", en: "Does radiesthesia replace medical treatment?" },
  "faq.a3":              { pt: "Não. É uma prática complementar, sem comprovação científica de eficácia para diagnosticar ou tratar doenças. Não substitui acompanhamento médico ou psicológico e não deve ser usada para interromper tratamentos.", en: "No. It is a complementary practice, without scientific proof of efficacy for diagnosing or treating diseases. It does not replace medical or psychological care and should not be used to interrupt treatments." },
  "faq.q4":              { pt: "Posso fazer as sessões morando fora do Brasil?", en: "Can I have sessions while living outside Brazil?" },
  "faq.a4":              { pt: "Sim. As sessões individuais são em português e destinadas a brasileiros no mundo todo. Os horários são combinados diretamente com a Millene, respeitando o seu fuso.", en: "Yes. Individual sessions are in Portuguese and intended for Brazilians around the world. Times are arranged directly with Millene, respecting your time zone." },

  /* ── Contact invitation ──────────────────────────────────────── */
  "contact.eyebrow":     { pt: "Pronta para começar?",     en: "Ready to begin?" },
  "contact.title":       { pt: "Um passo pode mudar",      en: "One step can change" },
  "contact.titleEm":     { pt: "o seu olhar.",             en: "your perspective." },
  "contact.lead":        { pt: "Entre em contato e converse com a Millene sobre o que está sentindo. O primeiro passo é simples.", en: "Get in touch and talk to Millene about what you are feeling. The first step is simple." },
  "contact.cta":         { pt: "Vamos conversar?",          en: "Shall we talk?" },
  "contact.instagram":   { pt: "Seguir no Instagram",      en: "Follow on Instagram" },

  /* ── Footer ──────────────────────────────────────────────────── */
  "footer.location":     { pt: "San Diego (EUA)",          en: "San Diego (USA)" },
  "footer.locationSuffix":{ pt: "— atendimento online para brasileiros no mundo.", en: "— online care for Brazilians worldwide." },
  "footer.pages":        { pt: "Páginas",                  en: "Pages" },
  "footer.contact":      { pt: "Contato",                  en: "Contact" },
  "footer.disclaimer":   { pt: "Prática integrativa complementar. Não substitui diagnóstico ou tratamento médico.", en: "Complementary integrative practice. Does not replace medical diagnosis or treatment." },
  "footer.rights":       { pt: "Todos os direitos reservados.", en: "All rights reserved." },
} satisfies Record<string, { pt: string; en: string }>;

export type TranslationKey = keyof typeof translations;
