const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-panel, .projects-section, .process-section, .about-section, .contact-section"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => observer.observe(item));

const translations = {
  en: {
    "meta.title": "Ryan Logan | AI Portfolio",
    "meta.description":
      "Ryan Logan's AI portfolio featuring practical automation systems, real-world artificial intelligence projects, and scalable workflow solutions.",
    "language.ariaLabel": "Language selector",
    "nav.projects": "Projects",
    "nav.process": "Process",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Artificial intelligence portfolio",
    "hero.title":
      'Ryan Logan builds <span>AI systems</span> that turn real-world problems into practical workflows.',
    "hero.text":
      "I am focused on building useful AI and automation systems that reduce manual work, improve decision-making, and make everyday business processes more efficient. My interests sit at the intersection of finance, operations, and practical automation.",
    "hero.viewProjects": "View projects",
    "hero.viewResume": "View resume",
    "hero.headshotAlt": "Ryan Logan headshot",
    "hero.profileRole":
      "Building practical AI systems for finance, business workflows, and productivity",
    "hero.quickProfile": "Quick profile",
    "hero.quickItem1": "<span>AI</span> practical systems over hype",
    "hero.quickItem2":
      "<span>BSU</span> Honors College, Accounting & Finance",
    "hero.quickItem3":
      "<span>3</span> languages: English, Spanish, French",
    "links.email": "Email",
    "ticker.ariaLabel": "Featured technologies",
    "ticker.item1": "Ryan Logan",
    "ticker.item2": "Practical AI",
    "ticker.item3": "Email Automation",
    "ticker.item4": "Finance Systems",
    "ticker.item5": "Workflow Design",
    "ticker.item6": "Structured Data",
    "ticker.item7": "Decision Support",
    "ticker.item8": "Business Automation",
    "projects.eyebrow": "Current project",
    "projects.heading":
      "A real workflow I am building to turn raw financial emails into structured, usable data.",
    "projects.featured.meta1": "Project 01",
    "projects.featured.meta2": "AI + Email Automation",
    "projects.featured.title": "AI Financial Email Parser",
    "projects.featured.text":
      "This project pulls transaction information from Bank of America email alerts, uses AI to parse and categorize the data, and sends it into a structured Excel budgeting system. The goal is to remove repetitive manual entry and create cleaner financial visibility.",
    "projects.featured.tag1": "Email parsing",
    "projects.featured.tag2": "AI structuring",
    "projects.featured.tag3": "Excel automation",
    "projects.featured.link": "View GitHub profile",
    "projects.problem.meta1": "Problem",
    "projects.problem.meta2": "Why it matters",
    "projects.problem.title": "Reducing manual financial tracking",
    "projects.problem.text":
      "Financial activity often lives in scattered inbox alerts and disconnected records. I am building this system to turn that unstructured information into something organized, trackable, and useful without constant manual upkeep.",
    "projects.problem.tag1": "Workflow efficiency",
    "projects.problem.tag2": "Personal finance",
    "projects.problem.tag3": "Structured records",
    "projects.problem.link": "Built for real-world utility",
    "projects.future.meta1": "Direction",
    "projects.future.meta2": "What comes next",
    "projects.future.title": "More systems in development",
    "projects.future.text":
      "Beyond this project, I want to keep building AI systems that help individuals and small businesses save time, operate smarter, and make better decisions. My focus is on useful systems, not just demos.",
    "projects.future.tag1": "Business workflows",
    "projects.future.tag2": "Decision support",
    "projects.future.tag3": "Practical AI",
    "projects.future.link": "Read more about Ryan",
    "process.eyebrow": "How I work",
    "process.heading":
      "A process centered on solving real problems with clear, usable systems.",
    "process.step1.title": "Discover",
    "process.step1.text":
      "I start by looking for friction in real workflows: where information is messy, where time is wasted, and where better systems could create leverage.",
    "process.step2.title": "Prototype",
    "process.step2.text":
      "I connect tools, prompts, and structured outputs into an early workflow, then test whether it actually reduces effort and improves the process.",
    "process.step3.title": "Refine",
    "process.step3.text":
      "I refine each system around usefulness, reliability, and scalability so it can move beyond an experiment and support real everyday use.",
    "about.eyebrow": "About",
    "about.heading":
      "I am building toward a future in AI-enhanced business systems, finance workflows, and practical problem solving.",
    "about.text1":
      "My goal is to build practical AI and automation systems that help people and businesses save time, reduce complexity, and make better decisions. I see AI as a tool for improving systems, not just as a standalone product.",
    "about.text2":
      "I am especially interested in finance, business operations, and productivity workflows where unstructured information can be turned into clean processes and usable insights. Long term, I want to keep building systems that are practical, scalable, and grounded in real-world use.",
    "about.stack.educationLabel": "Education",
    "about.stack.educationText":
      "Bridgewater State University Honors College, Accounting & Finance",
    "about.stack.backgroundLabel": "Background",
    "about.stack.backgroundText":
      "Entrepreneurship, finance, operations, and hands-on business experience",
    "about.stack.focusLabel": "Focus",
    "about.stack.focusText":
      "Practical AI, automation systems, structured data workflows, and scalable execution",
    "contact.eyebrow": "Contact",
    "contact.heading":
      "Let's connect about AI, automation, finance workflows, and practical systems.",
    "contact.text":
      "You can reach me by email, view my GitHub, connect on LinkedIn, or open my resume directly.",
    "contact.resume": "Resume",
  },
  es: {
    "meta.title": "Ryan Logan | Portafolio de IA",
    "meta.description":
      "Portafolio de IA de Ryan Logan con sistemas prácticos de automatización, proyectos de inteligencia artificial aplicados y soluciones escalables de flujo de trabajo.",
    "language.ariaLabel": "Selector de idioma",
    "nav.projects": "Proyectos",
    "nav.process": "Proceso",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Portafolio de inteligencia artificial",
    "hero.title":
      'Ryan Logan construye <span>sistemas de IA</span> que convierten problemas reales en flujos de trabajo prácticos.',
    "hero.text":
      "Estoy enfocado en construir sistemas útiles de IA y automatización que reduzcan el trabajo manual, mejoren la toma de decisiones y hagan más eficientes los procesos de negocio cotidianos. Mis intereses están en la intersección de finanzas, operaciones y automatización práctica.",
    "hero.viewProjects": "Ver proyectos",
    "hero.viewResume": "Ver resume",
    "hero.headshotAlt": "Foto profesional de Ryan Logan",
    "hero.profileRole":
      "Construyendo sistemas prácticos de IA para finanzas, flujos de trabajo empresariales y productividad",
    "hero.quickProfile": "Perfil rápido",
    "hero.quickItem1": "<span>IA</span> sistemas prácticos por encima del hype",
    "hero.quickItem2":
      "<span>BSU</span> Honors College, Contabilidad y Finanzas",
    "hero.quickItem3":
      "<span>3</span> idiomas: inglés, español y francés",
    "links.email": "Correo",
    "ticker.ariaLabel": "Tecnologías destacadas",
    "ticker.item1": "Ryan Logan",
    "ticker.item2": "IA práctica",
    "ticker.item3": "Automatización de correos",
    "ticker.item4": "Sistemas financieros",
    "ticker.item5": "Diseño de flujos",
    "ticker.item6": "Datos estructurados",
    "ticker.item7": "Apoyo a decisiones",
    "ticker.item8": "Automatización empresarial",
    "projects.eyebrow": "Proyecto actual",
    "projects.heading":
      "Un flujo de trabajo real que estoy construyendo para convertir correos financieros sin estructura en datos útiles y organizados.",
    "projects.featured.meta1": "Proyecto 01",
    "projects.featured.meta2": "IA + Automatización de correos",
    "projects.featured.title": "Parser financiero de correos con IA",
    "projects.featured.text":
      "Este proyecto extrae información de transacciones de alertas por correo de Bank of America, usa IA para interpretar y categorizar los datos, y los envía a un sistema estructurado de presupuesto en Excel. El objetivo es eliminar la entrada manual repetitiva y crear una visión financiera más clara.",
    "projects.featured.tag1": "Análisis de correos",
    "projects.featured.tag2": "Estructuración con IA",
    "projects.featured.tag3": "Automatización en Excel",
    "projects.featured.link": "Ver perfil de GitHub",
    "projects.problem.meta1": "Problema",
    "projects.problem.meta2": "Por qué importa",
    "projects.problem.title": "Reducir el seguimiento financiero manual",
    "projects.problem.text":
      "La actividad financiera suele quedar dispersa entre alertas de correo y registros desconectados. Estoy construyendo este sistema para convertir esa información sin estructura en algo organizado, rastreable y útil sin mantenimiento manual constante.",
    "projects.problem.tag1": "Eficiencia del flujo",
    "projects.problem.tag2": "Finanzas personales",
    "projects.problem.tag3": "Registros estructurados",
    "projects.problem.link": "Diseñado para utilidad real",
    "projects.future.meta1": "Dirección",
    "projects.future.meta2": "Lo que sigue",
    "projects.future.title": "Más sistemas en desarrollo",
    "projects.future.text":
      "Más allá de este proyecto, quiero seguir construyendo sistemas de IA que ayuden a personas y pequeñas empresas a ahorrar tiempo, operar con más inteligencia y tomar mejores decisiones. Mi enfoque está en sistemas útiles, no solo en demos.",
    "projects.future.tag1": "Flujos empresariales",
    "projects.future.tag2": "Apoyo a decisiones",
    "projects.future.tag3": "IA práctica",
    "projects.future.link": "Leer más sobre Ryan",
    "process.eyebrow": "Cómo trabajo",
    "process.heading":
      "Un proceso centrado en resolver problemas reales con sistemas claros y útiles.",
    "process.step1.title": "Descubrir",
    "process.step1.text":
      "Empiezo buscando fricción en flujos de trabajo reales: dónde la información está desordenada, dónde se pierde tiempo y dónde mejores sistemas pueden generar más apalancamiento.",
    "process.step2.title": "Prototipar",
    "process.step2.text":
      "Conecto herramientas, prompts y salidas estructuradas en un flujo inicial, y luego pruebo si realmente reduce esfuerzo y mejora el proceso.",
    "process.step3.title": "Refinar",
    "process.step3.text":
      "Refino cada sistema alrededor de la utilidad, la confiabilidad y la escalabilidad para que pueda ir más allá de un experimento y servir en el uso diario real.",
    "about.eyebrow": "Sobre mí",
    "about.heading":
      "Estoy construyendo mi camino hacia un futuro en sistemas empresariales potenciados por IA, flujos financieros y resolución práctica de problemas.",
    "about.text1":
      "Mi objetivo es construir sistemas prácticos de IA y automatización que ayuden a personas y empresas a ahorrar tiempo, reducir complejidad y tomar mejores decisiones. Veo la IA como una herramienta para mejorar sistemas, no solo como un producto independiente.",
    "about.text2":
      "Me interesan especialmente las finanzas, las operaciones empresariales y los flujos de productividad donde la información sin estructura puede convertirse en procesos limpios e insights útiles. A largo plazo, quiero seguir construyendo sistemas prácticos, escalables y conectados al uso real.",
    "about.stack.educationLabel": "Educación",
    "about.stack.educationText":
      "Bridgewater State University Honors College, Contabilidad y Finanzas",
    "about.stack.backgroundLabel": "Trayectoria",
    "about.stack.backgroundText":
      "Emprendimiento, finanzas, operaciones y experiencia práctica en negocios",
    "about.stack.focusLabel": "Enfoque",
    "about.stack.focusText":
      "IA práctica, sistemas de automatización, flujos de datos estructurados y ejecución escalable",
    "contact.eyebrow": "Contacto",
    "contact.heading":
      "Conectemos sobre IA, automatización, flujos financieros y sistemas prácticos.",
    "contact.text":
      "Puedes escribirme por correo, ver mi GitHub, conectar conmigo en LinkedIn o abrir mi resume directamente.",
    "contact.resume": "Resume",
  },
};

const languageButtons = document.querySelectorAll("[data-language-button]");
const textNodes = document.querySelectorAll("[data-i18n]");
const htmlNodes = document.querySelectorAll("[data-i18n-html]");
const storageKey = "ryan-logan-portfolio-language";

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const attr = node.dataset.i18nAttr;
    const value = dictionary[key];

    if (!value) {
      return;
    }

    if (attr) {
      node.setAttribute(attr, value);
    } else {
      node.textContent = value;
    }
  });

  htmlNodes.forEach((node) => {
    const key = node.dataset.i18nHtml;
    const value = dictionary[key];

    if (value) {
      node.innerHTML = value;
    }
  });

  document.documentElement.lang = language;
  document.title = dictionary["meta.title"];

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(storageKey, language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageButton);
  });
});

const savedLanguage = localStorage.getItem(storageKey);
const browserLanguage = navigator.language.toLowerCase().startsWith("es")
  ? "es"
  : "en";
const initialLanguage = savedLanguage && translations[savedLanguage]
  ? savedLanguage
  : browserLanguage;

applyLanguage(initialLanguage);
