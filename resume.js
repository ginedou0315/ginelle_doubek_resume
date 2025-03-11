const translations = {
  en: {
    homepage: "Back to homepage",
    resume: "My Resume",
    experience: "Experience",
    education: "Education",
    jobcongress:
      "Mainly responsible for Abstract Programme at the annual EULAR Congress, I managed and consolidated submitted abstracts and coordinated their evaluation with Abstract Chairs and Reviewers. I set-up the M-anage system for abstract submission, created and coordinated sessions, and liaised with authors and submitters. Additionally, I performed various tasks to ensure the success of the yearly Congress.",
    jobclaviger:
      "Responsible for prospecting and acquiring new hotels to represent in the Middle East, managing all sales activities aimed at acquiring and developing new accounts. Coordinated with the CEO on business development and revenue stream activities, collected and analyzed data for presentations to stakeholders. Attended international travel trade exhibitions, road shows, and workshops as needed.",
    jobhotel:
      "Successfully drove key sales activities for Starwood programs in UAE and Greece, including client appointments, promotions, familiarization trips, and hotel sales trips to increase market penetration and revenue. Managed team's sales production, data analysis, and presentations to management and customers. Innovated methods for maintaining the team's account database and sales activity log within the Starwood catering sales system. Effectively coordinated business relationships between clients and hotels, including problem resolution, while maintaining strong relationships with customers to influence their decisions.",
    // Add more translations as needed
  },
  de: {
    homepage: "Zurück zur Startseite",
    resume: "Mein Lebenslauf",
    experience: "Erfahrung",
    education: "Ausbildung",
    jobcongress:
      "Ich war hauptsächlich für das Abstract-Programm des jährlichen EULAR-Kongresses verantwortlich, verwaltete und konsolidierte die eingereichten Abstracts und koordinierte ihre Bewertung mit den Abstract-Chairs und Reviewern.Ich richtete das M-anage-System für die Einreichung von Abstracts ein, erstellte und koordinierte Sitzungen und hielt Kontakt zu Autoren und Einreichern. Darüber hinaus habe ich verschiedene Aufgaben übernommen, um den Erfolg des jährlichen Kongresses zu gewährleisten.",
    jobclaviger:
      "Verantwortlich für die Suche und Akquisition neuer Hotels im Nahen Osten, Verwaltung aller Verkaufsaktivitäten, die auf die Akquisition und Entwicklung neuer Kunden abzielen. Koordination mit dem CEO in Bezug auf die Geschäftsentwicklung und Aktivitäten zur Steigerung der Einnahmen, Sammeln und Analysieren von Daten für Präsentationen vor Interessengruppen. Teilnahme an internationalen Reisefachmessen, Roadshows und Workshops nach Bedarf.",
    jobhotel:
      "Erfolgreiche Durchführung wichtiger Verkaufsaktivitäten für Starwood-Programme in den Vereinigten Arabischen Emiraten und Griechenland, einschließlich Kundenterminen, Werbeaktionen, Einführungsreisen und Hotelverkaufsreisen zur Steigerung der Marktdurchdringung und der Einnahmen. Verwaltete die Verkaufsproduktion des Teams, Datenanalysen und Präsentationen für das Management und Kunden. Entwicklung innovativer Methoden zur Pflege der Kontodatenbank des Teams und des Verkaufsaktivitätenprotokolls innerhalb des Starwood-Catering-Verkaufssystems. Effektive Koordination der Geschäftsbeziehungen zwischen Kunden und Hotels, einschließlich Problemlösung, und starke Beziehungen zu den Kunden zu pflegen, um deren ihre Entscheidungen zu beeinflussen.",
    // Add more translations as needed
  },
};

function switchLanguage(lang) {
  document.querySelector("#homepage").innerText = translations[lang].homepage;
  document.querySelector("#resume").innerText = translations[lang].resume;
  document.querySelector("#experience").innerText =
    translations[lang].experience;
  document.querySelector("#education").innerText = translations[lang].education;
  document.querySelector("#jobCongress").innerText =
    translations[lang].jobcongress;
  document.querySelector("#jobClaviger").innerText =
    translations[lang].jobclaviger;
  document.querySelector("#jobHotel").innerText = translations[lang].jobhotel;

  // Update more elements as needed
}
