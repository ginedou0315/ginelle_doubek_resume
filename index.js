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
    description:
      '"Innovative Front-End Developer: Coding, Creating, Connecting."',
    firstParagraph: `A creative web developer with a diverse background in research, sales, and international business, I bring a unique perspective to creating innovative and user-friendly web solutions in software and web development. I completed a Full Stack Web Development Bootcamp with SheCodes and gained experience in React, Bootstrap, and responsive design. I enjoy using tools like VSCode, Github, and Microsoft Windows to build projects and I'm particularly interested in AI solutions. My career journey began in agricultural economics and evolved through roles at Unilever, Procter & Gamble, and Nestle, leading to a Master's in Business Management. With a passion to become a front-end developer and a love for React projects, I am eager to contribute my skills and experience to impactful projects in the IT industry. My experience in diverse roles has instilled in me the mantra, "When the going gets tough, the tough get going."`,
    AI_title: "Get to know me more!",
    AI_intro: "'Ginny's AI is trained to answer your question below.'🤓",
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
    description:
      '"Innovativer Front-End-Entwickler: Codieren, Erstellen, Verbinden."',
    firstParagraph: `Als kreativer Webentwickler mit einem vielseitigen Hintergrund in den Bereichen Forschung, Vertrieb und internationales Geschäft bringe ich eine einzigartige Perspektive für die Erstellung innovativer und benutzerfreundlicher Web-Lösungen in der Software- und Webentwicklung mit. Ich habe ein Full Stack Web Development Bootcamp mit SheCodes absolviert und Erfahrungen in React, Bootstrap und Responsive Design gesammelt. Ich verwende gerne Tools wie VSCode, Github und Microsoft Windows, um Projekte zu erstellen und interessiere mich besonders für KI-Lösungen. Mein beruflicher Werdegang begann in der Agrarwirtschaft und führte mich über Stationen bei Unilever, Procter & Gamble und Nestle zu einem Master in Business Management. Mit meiner Leidenschaft als Front-End-Entwickler und meiner Liebe zu React-Projekten möchte ich meine Fähigkeiten und Erfahrungen in wirkungsvolle Projekte in der IT-Branche einbringen. Meine Erfahrung in verschiedenen Rollen hat mir das Mantra eingeflößt:"Wenn es hart auf hart kommt, gehen die Harten los."`,
    AI_title: "Lernen Sie mich besser kennen!",
    AI_intro: "'Ginny's AI ist darauf trainiert, Ihre Frage zu beantworten.'🤓",
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
  document.querySelector("#title_AI").innerText = translations[lang].AI_title;
  document.querySelector("#intro_AI").innerText = translations[lang].AI_intro;
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
