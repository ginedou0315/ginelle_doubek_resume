const translations = {
  en: {
    homepage: "Back to homepage",
    resume: "My Resume",
    experience: "Experience",
    education: "Education",

    // Add more translations as needed
  },
  de: {
    homepage: "Zurück zur Startseite",
    resume: "Mein Lebenslauf",
    experience: "Erfahrung",
    education: "Ausbildung",

    // Add more translations as needed
  },
};

function switchLanguage(lang) {
  document.querySelector("#homepage").innerText = translations[lang].homepage;
  document.querySelector("#resume").innerText = translations[lang].resume;
  document.querySelector("#experience").innerText =
    translations[lang].experience;
  document.querySelector("#education").innerText = translations[lang].education;

  // Update more elements as needed
}
