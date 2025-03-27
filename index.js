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
    description: '"I am a woman of action."',
    firstParagraph:
      "I began my career leaning towards becoming a Researcher, completing a Bachelor's in Agricultural Economics majoring in Price and Marketing analysis. My first job was in Data Management for university projects, but after a year, I yearned for more challenge and transitioned to Sales, where I quickly became a Sales Manager. This started my journey in Sales and Marketing, working with companies like Unilever, Procter & Gamble, and Nestle. Later, I took a break to pursue a Master's in Business Management and working part-time as a Research Assistant for the International Rice Research Institute.",
    secondParagraph:
      "I moved to Dubai, UAE, where I worked in hotel sales, advancing from Sales Specialist at Sheraton JBR to the Global Sales Office for Starwood Hotels. During my first year in Dubai, I met my husband, and after two years of dating, we got married. Following 8 good years in Dubai, we relocated to Switzerland where my husband's job is permanently based. My first 2 years in Switzerland, I continued working remotely for a Dubai-based company and made use of this time learning German. My first Swiss role was as Congress Coordinator for EULAR in Zurich.",
    thirdParagraph:
      "In 2023, I discovered a passion for coding and web development, I completed various online courses. This experience has ignited my desire to learn and grow in this field. I have honed my skills in HTML, CSS, and JavaScript over the past 2 years. I've created applications and websites, combining my diverse professional experiences with dedication and drive. My optimism and self belief empower me to overcome challenges. 'Quitting' is not in my vocabulary. I live by the mantra, 'When the going gets tough, the tough get going.'",
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
    description: '"Ich bin eine Frau der Tat."',
    firstParagraph:
      "Ich begann meine Karriere mit einem Bachelor in Agrarökonomie mit Schwerpunkt Preis- und Marketinganalyse und wollte Forscher werden. Meine erste Stelle war im Datenmanagement für Universitätsprojekte, aber nach einem Jahr sehnte ich mich nach einer größeren Herausforderung und wechselte in den Vertrieb, wo ich schnell zur Vertriebsleiterin wurde. Damit begann meine Reise im Bereich Vertrieb und Marketing, wo ich mit Unternehmen wie Unilever, Procter & Gamble und Nestle zusammenarbeitete. Später machte ich eine Pause, um einen Master in Business Management zu machen in Business Management und arbeitete in Teilzeit als Forschungsassistentin Forschungsassistentin für das International Rice Research Institute.",
    secondParagraph:
      "Ich zog nach Dubai, Vereinigte Arabische Emirate, wo ich im Hotelvertrieb arbeitete und vom Verkaufsspezialisten im Sheraton JBR zum globalen Verkaufsbüro für Starwood Hotels aufstieg. Während meines ersten Jahres in Dubai lernte ich meinen Mann kennen, und nach zwei Jahren Beziehung heirateten wir. Nach 8 guten Jahren in Dubai zogen wir in die Schweiz um, wo mein Mann seinen festen Arbeitsplatz hat. In den ersten 2 Jahren in der Schweiz arbeitete ich weiterhin per Fernzugriff für ein Unternehmen in Dubai und nutzte diese Zeit, um Deutsch zu lernen. Meine erste Aufgabe in der Schweiz war die eines Kongresskoordinators für die EULAR in Zürich.",
    thirdParagraph:
      "Im Jahr 2023 entdeckte ich meine Leidenschaft für Programmierung und Webentwicklung und absolvierte verschiedene Online-Kurse. Diese Erfahrung hat meinen Wunsch geweckt, in diesem Bereich zu lernen und zu wachsen. In den letzten 2 Jahren habe ich meine Fähigkeiten in HTML, CSS und JavaScript verfeinert. Ich habe Anwendungen und Websites erstellt und dabei meine vielfältigen beruflichen Erfahrungen mit Hingabe und Tatkraft kombiniert. Mein Optimismus und mein Selbstvertrauen helfen mir, Herausforderungen zu meistern. „Aufgeben“ gehört nicht zu meinem Wortschatz. Ich lebe nach dem Mantra: „Wenn es hart auf hart kommt, gehen die Harten weiter“.",
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
  document.querySelector("#intro_first_paragraph").innerText =
    translations[lang].firstParagraph;
  document.querySelector("#intro_second_paragraph").innerText =
    translations[lang].secondParagraph;
  document.querySelector("#intro_third_paragraph").innerText =
    translations[lang].thirdParagraph;
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

function displayAnswer(response) {
  new Typewriter("#question", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}
function generateQuestion(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user_instruction");
  apiKey = "e430a0b40t5635ffab9bc012406aa3ao";
  let context =
    "You are an AI of Ginelle Doubek. You are a aspiring Front-end Developer who is based in Baden Switzerland. You are tall, beautiful, sporty, very active, humble, respectful and approachable. You have almost 20 years of work experience in different fields such as Research, Data Management, and huge part of in Sales Management. You have worked for multinational companies such as Unilever, P&G, Nestle, and Starwood Hotels. You graduated Bachelors in Economics major in Marketing and Price Analysis. You have a Master in Business Management and in Data Analytics. You are currently studying to become a Full Stack Web Developer. You have just recently found out that you have a talent in coding. It started as a hobby. An expert in Excelsheet and other MS office. You are a fast learner and can become an expert on it if you put your heart and mind to it. You love to learn new things and improve skills. You are inclined to become a Product Developer or a Data Analyst. You LinkedIn profile is https://www.linkedin.com/in/ginelledoubek/. You have lived in different countries like Dubai for 8 years, Australia, Philippines where you were born and raised, Czech Republic and Switzerland. You love to travel and experience the culture of each country. You love to play tennis, go mountain biking during summer, go to the gym, yoga specially Iyengar yoga, run and do cross country skiing during winter. You like nature and love to go for long walks. You love to cook and very good at it. You have gone thru a lot n life professionally and personally. You had bad experiences in your work professional and went burnt out for almost 2 years. The time you spent to heal and develop yourself again gained you the mindset that you should equipped yourself so no one can bully or step on you. You should always love yourself and think first for yourself. No one can healp ou but yourself. You love the book 'The Power of Now'. This help you to become more aware if what is important now and not to live from the past or think what the future could bring. You are married to Petr which has been a good friend, provider and partner. You like to spend time with family and friends. You believe in God and believes that prayers are the most powerful tool in anything we do. You speak English, German and Filipino languages. Your answer should be limited to 3 sentences only. Sign in the end your nickname, Ginny😗.";

  let prompt = `User's Instruction: Answer the question professionally, and a bit background on the family with respect. Limit your answer in 3 sentences. You can check the linkedin profile. Make sure the main topic is ${instructionInput.value}.`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let questionElement = document.querySelector("#question");
  questionElement.classList.remove("hidden");
  questionElement.innerHTML = `<div class="generating">Let me think... 🤔🤔🤔</div>`;

  console.log("Generating Answer");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayAnswer);
}
let questionFormElement = document.querySelector("#question-request");
questionFormElement.addEventListener("submit", generateQuestion);
