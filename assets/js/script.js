'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * FAQ Accordion
 */

const accordionBtns = document.querySelectorAll("[data-accordion-btn]");

accordionBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.parentElement;
    const content = this.nextElementSibling;

    // Close other open accordions
    document.querySelectorAll(".faq-card.active").forEach(activeCard => {
      if (activeCard !== card) {
        activeCard.classList.remove("active");
        activeCard.querySelector(".faq-content").style.maxHeight = null;
      }
    });

    // Toggle current accordion
    card.classList.toggle("active");

    if (card.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

/**
 * Scroll Reveal Animation (AOS)
 */

// Initialize AOS
AOS.init({
  duration: 800,
  offset: 100,
  once: true,
});

/**
 * Swiper Carousel
 */

const swiper = new Swiper('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*-----------------------------------*\
  #DARK MODE
\*-----------------------------------*/

const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("ion-icon");

// Check local storage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.setAttribute("name", "sunny-outline");
}

themeToggleBtn.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeIcon.setAttribute("name", "moon-outline");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.setAttribute("name", "sunny-outline");
  }
});


/*-----------------------------------*\
  #INTERNATIONALIZATION (i18n)
\*-----------------------------------*/

const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_services: "Services",
    nav_projects: "Réalisations",
    nav_contact: "Contact",
    get_quote: "Devis Gratuit",
    hero_subtitle: "Votre Partenaire Propreté & Services",
    hero_title: "Expert du Nettoyage en Lorraine & Luxembourg",
    hero_text: "Nettoyage de chantier, bureaux, copropriétés et vitrerie. Intervention rapide 7j/7 pour professionnels et particuliers.",
    hero_btn_quote: "Demander un Devis",
    hero_btn_services: "Nos Services",
    about_subtitle: "À Propos de Nous",
    about_title: "Plus qu'une entreprise de nettoyage, un partenaire de confiance.",
    about_text: "Basés en Moselle, nous intervenons dans tout le Grand Est et au Luxembourg. Notre force ? Une réactivité exemplaire et un souci du détail qui fait la différence. Que ce soit pour une fin de chantier complexe ou l'entretien régulier de vos locaux, nous nous adaptons à vos contraintes.",
    about_callout: "Notre engagement : un résultat impeccable, des délais respectés et une satisfaction client garantie.",
    about_btn: "Découvrir nos Services",
    services_subtitle: "Nos Services",
    services_title: "Des solutions complètes pour tous vos besoins",
    testimonials_subtitle: "Témoignages",
    testimonials_title: "Ce que disent nos clients",
    faq_subtitle: "FAQ",
    faq_title: "Questions Fréquentes",
    contact_subtitle: "Nous Contacter",
    contact_title: "Besoin d'un Devis ou d'une Information ?",
    contact_text: "Remplissez le formulaire ci-dessous ou appelez-nous directement. Réponse sous 24h garantie."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",
    get_quote: "Free Quote",
    hero_subtitle: "Your Cleaning & Services Partner",
    hero_title: "Cleaning Expert in Lorraine & Luxembourg",
    hero_text: "Post-construction cleaning, offices, condominiums, and window cleaning. Fast intervention 7/7 for professionals and individuals.",
    hero_btn_quote: "Get a Quote",
    hero_btn_services: "Our Services",
    about_subtitle: "About Us",
    about_title: "More than a cleaning company, a trusted partner.",
    about_text: "Based in Moselle, we operate throughout the Grand Est and Luxembourg. Our strength? Exemplary responsiveness and attention to detail that makes the difference. Whether for a complex post-construction cleanup or regular maintenance of your premises, we adapt to your constraints.",
    about_callout: "Our commitment: impeccable results, respected deadlines, and guaranteed client satisfaction.",
    about_btn: "Discover our Services",
    services_subtitle: "Our Services",
    services_title: "Complete solutions for all your needs",
    testimonials_subtitle: "Testimonials",
    testimonials_title: "What our clients say",
    faq_subtitle: "FAQ",
    faq_title: "Frequently Asked Questions",
    contact_subtitle: "Contact Us",
    contact_title: "Need a Quote or Information?",
    contact_text: "Fill out the form below or call us directly. Response guaranteed within 24h."
  },
  de: {
    nav_home: "Startseite",
    nav_about: "Über Uns",
    nav_services: "Dienstleistungen",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    get_quote: "Kostenloses Angebot",
    hero_subtitle: "Ihr Partner für Sauberkeit & Service",
    hero_title: "Reinigungsexperte in Lothringen & Luxemburg",
    hero_text: "Baureinigung, Büros, Eigentumswohnungen und Glasreinigung. Schneller Einsatz 7/7 für Profis und Privatpersonen.",
    hero_btn_quote: "Angebot anfordern",
    hero_btn_services: "Unsere Leistungen",
    about_subtitle: "Über Uns",
    about_title: "Mehr als eine Reinigungsfirma, ein vertrauenswürdiger Partner.",
    about_text: "Mit Sitz in Moselle sind wir im gesamten Grand Est und in Luxemburg tätig. Unsere Stärke? Vorbildliche Reaktionsfähigkeit und Liebe zum Detail, die den Unterschied macht. Ob für eine komplexe Baureinigung oder die regelmäßige Wartung Ihrer Räumlichkeiten, wir passen uns Ihren Zwängen an.",
    about_callout: "Unser Engagement: tadellose Ergebnisse, eingehaltene Fristen und garantierte Kundenzufriedenheit.",
    about_btn: "Entdecken Sie unsere Dienste",
    services_subtitle: "Unsere Leistungen",
    services_title: "Komplettlösungen für alle Ihre Bedürfnisse",
    testimonials_subtitle: "Referenzen",
    testimonials_title: "Was unsere Kunden sagen",
    faq_subtitle: "FAQ",
    faq_title: "Häufig gestellte Fragen",
    contact_subtitle: "Kontaktieren Sie uns",
    contact_title: "Benötigen Sie ein Angebot oder Informationen?",
    contact_text: "Füllen Sie das untenstehende Formular aus oder rufen Sie uns direkt an. Antwort innerhalb von 24 Stunden garantiert."
  }
};

const langDropdown = document.querySelector(".lang-dropdown");
const langBtn = document.querySelector(".lang-btn");
const langList = document.querySelector(".lang-list");
const langItems = document.querySelectorAll(".lang-list li");
const currentLangFlag = document.querySelector(".current-lang-flag");
const currentLangCode = document.querySelector(".current-lang-code");

// Toggle dropdown
langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  langDropdown.classList.remove("active");
});

const updateLanguage = (lang) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  // Update button content
  const flag = lang === 'fr' ? '🇫🇷' : lang === 'en' ? '🇬🇧' : '🇩🇪';
  currentLangFlag.textContent = flag;
  currentLangCode.textContent = lang.toUpperCase();
};

// Check local storage for language
const currentLang = localStorage.getItem("lang") || "fr";
updateLanguage(currentLang);

// Handle language selection
langItems.forEach(item => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang");
    updateLanguage(lang);
    langDropdown.classList.remove("active");
  });
});


/*-----------------------------------*\
  #NEW FEATURES LOGIC
\*-----------------------------------*/

/**
 * Preloader
 */
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * Back to Top Button
 */
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});

/**
 * Cookie Consent
 */
const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookieAcceptBtn = document.querySelector("[data-cookie-accept]");

if (localStorage.getItem("cookieAccepted") !== "true") {
  setTimeout(() => {
    cookieBanner.classList.add("active");
  }, 2000);
}

cookieAcceptBtn.addEventListener("click", function () {
  cookieBanner.classList.remove("active");
  localStorage.setItem("cookieAccepted", "true");
});

/**
 * Lightbox
 */
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
const lightboxCloseBtn = document.querySelector("[data-lightbox-close]");
const projectImages = document.querySelectorAll(".property-card .card-banner img");

projectImages.forEach(img => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    lightboxImg.src = this.src;
    lightbox.classList.add("active");
  });
});

lightboxCloseBtn.addEventListener("click", function () {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

/*-----------------------------------*\
  #ANIMATED COUNTERS
\*-----------------------------------*/

const counters = document.querySelectorAll('.counter');
let countersActivated = false;

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
};

// Trigger counters when stats section is in view
const statsSection = document.querySelector('.stats');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersActivated) {
        animateCounters();
        countersActivated = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

/*-----------------------------------*\
  #BEFORE/AFTER SLIDER
\*-----------------------------------*/

const beforeAfterSwiper = new Swiper('.before-after-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

/*-----------------------------------*\
  #SCHEMA MARKUP GENERATION
\*-----------------------------------*/

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Intervenez-vous le week-end ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous intervenons 7j/7, y compris les week-ends et jours fériés, pour répondre à vos urgences ou contraintes de planning."
      }
    },
    {
      "@type": "Question",
      "name": "Les devis sont-ils gratuits ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Tous nos devis sont gratuits et sans engagement. Nous nous déplaçons si nécessaire pour évaluer les travaux."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est votre zone d'intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous couvrons principalement la Moselle (57), la Meurthe-et-Moselle (54) et le Luxembourg. Contactez-nous pour vérifier votre localité."
      }
    }
  ]
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TM Nettoyage",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sophie M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Intervention rapide et efficace pour un nettoyage de fin de chantier. L'équipe est très professionnelle. Je recommande vivement !"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marc D."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "TM Nettoyage gère l'entretien de nos bases vie depuis 6 mois. Rien à redire, c'est toujours impeccable. Un vrai partenaire de confiance."
    }
  ]
};

// Inject schemas into head
const injectSchema = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

injectSchema(faqSchema);
injectSchema(reviewSchema);