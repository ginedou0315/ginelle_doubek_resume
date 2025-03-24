// script.js
window.addEventListener("load", () => {
  const gallery = document.querySelector(".imageContainer");
  const images = Array.from(gallery.querySelectorAll("a"));

  // Clone images and append them to the gallery
  images.forEach((img) => {
    const clone = img.cloneNode();
    gallery.appendChild(clone);
  });

  // Calculate total width of all images
  const totalWidth = gallery.scrollWidth / 2;
  gallery.style.width = `${totalWidth * 2}px`; // Double the total width to fit all cloned images
});

const translations = {
  en: {
    title: "Ginelle Doubek Homepage",
    homepage: "Homepage",
    resume: "Resume",
    portfolio: "Portfolio",
    contact: "Contacts",
    name: "Ginelle Doubek",
    description: "Website Developer, based in Switzerland",
    introduction:
      "With over 18 years of experience in business development, sales, and data management. I have developed a strong skill set in prospecting, client relationship management, and strategic planning. In 2023, I found my passion for web development and completed an online bootcamp for women. This experience ignited my desire to learn and grow in this field. Over the past two years, I've honed my skills and am now an aspiring Front-End Web Developer, committed to creating dynamic and responsive websites. My extensive professional background seamlessly integrates with my new career, allowing me to leverage my strategic and communication skills in the tech industry.",
    experience: "Experience",
    education: "Education",
    downloadcv: "Download CV",
    skills: "Skills",
    hobbies: "Hobbies",
    certification: "Certifications",

    // Add more translations as needed
  },
  de: {
    title: "Ginelle Doubek Startseite",
    homepage: "Homepage",
    resume: "Lebenslauf",
    portfolio: "Projekte",
    contact: "Kontakte",
    name: "Ginelle Doubek",
    description: "Website-Entwicklerin, mit Sitz in der Schweiz",
    introduction:
      "Ich verfüge über 18 Jahre Erfahrung in den Bereichen Geschäftsentwicklung, Vertrieb und Datenmanagement. Ich habe starke Fähigkeiten in den Bereichen Akquise, Kundenbeziehungsmanagement und strategische Planung entwickelt. Im Jahr 2023 entdeckte ich meine Leidenschaft für die Webentwicklung und absolvierte ein Online-Bootcamp für Frauen. Diese Erfahrung hat meinen Wunsch geweckt, in diesem Bereich zu lernen und zu wachsen. In den letzten zwei Jahren habe ich meine Fähigkeiten verfeinert und bin nun eine aufstrebende Front-End-Webentwicklerin, die sich der Erstellung dynamischer und reaktionsschneller Websites verschrieben hat. Mein umfangreicher beruflicher Hintergrund fügt sich nahtlos in meine neue Karriere ein und ermöglicht es mir, meine strategischen und kommunikativen Fähigkeiten in der Technologiebranche zu nutzen.",
    experience: "Erfahrung",
    education: "Ausbildung",
    downloadcv: "CV Herunterladen",
    skills: "Kompetenzen",
    hobbies: "Hobbys",
    certification: "Zertifizierungen",

    // Add more translations as needed
  },
};

function switchLanguage(lang) {
  document.title = translations[lang].title;
  document.querySelector("#homepage").innerText = translations[lang].homepage;
  document.querySelector("#resume").innerText = translations[lang].resume;
  document.querySelector("#portfolio").innerText = translations[lang].portfolio;
  document.querySelector("#contact").innerText = translations[lang].contact;
  document.querySelector("#ginelle_doubek").innerText = translations[lang].name;
  document.querySelector("#job_based").innerText =
    translations[lang].description;
  document.querySelector(".self_description").innerText =
    translations[lang].introduction;
  document.querySelector(
    'button[aria-controls="multiCollapseExample1"]'
  ).innerText = translations[lang].experience;
  document.querySelector(
    'button[aria-controls="multiCollapseExample2"]'
  ).innerText = translations[lang].education;
  document.querySelector(
    'button[aria-controls="multiCollapseExample3"]'
  ).innerText = translations[lang].downloadcv;
  document.querySelector("#skills").innerText = translations[lang].skills;
  document.querySelector("#hobbies").innerText = translations[lang].hobbies;
  document.querySelector("#certification").innerText =
    translations[lang].certification;
  // Update more elements as needed
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".collapsible");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-bs-target");
      const targetElement = document.querySelector(targetId);

      // Check if the clicked section is already open
      const isAlreadyOpen = targetElement.classList.contains("show");

      // Close all open sections
      document.querySelectorAll(".collapse.show").forEach((collapse) => {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      });

      // If it was NOT open, open it
      if (!isAlreadyOpen) {
        bootstrap.Collapse.getOrCreateInstance(targetElement).show();
      }
    });
  });
});
