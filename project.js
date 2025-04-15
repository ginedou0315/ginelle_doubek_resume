const translations = {
  en: {
    title: "Projects",
    projectIntro: "Some of the projects I have worked on...",
    worldClockDescription:
      "Created a dynamic world clock application that provides the current time and date for any city entered by the user. The app features a continuously updating clock that counts minutes and seconds in real-time, ensuring users have accurate time information for global cities.",
    weatherDescription:
      "Developed a user-friendly weather application as my first coding project. The app provides real-time weather updates for any city worldwide. By simply typing the city's name, users can access current weather conditions, including temperature, humidity, and weather conditions. The app also displays the current day and time for the specified city.",
    forecastDescription:
      "Created an advanced weather forecasting application that provides detailed weather information for any searched city. The app displays current weather conditions, sunrise and sunset times, and a 5-day weather forecast, offering users comprehensive weather data for better planning.",
    recipeDescrition:
      "Created an innovative AI-driven recipe generator that offers users the simplest and most delicious recipes based on entered ingredients or specific recipe searches. The CHEF AI leverages advanced algorithms to provide easy-to-follow cooking instructions, ensuring users can make the most of the ingredients they have on hand.",
    travelDescrition:
      "This project is created to showcase and practice my skills in creating website using only CSS to style the whole HTML. This includes Hero, Footer, Cards, Grids, Embeds, CSS Filters and HTML Table. I chose Prague as its one of my second home here in Europe.",
    otherProjectDescrition: "Other Projects...",
    // Add more translations as needed
  },
  de: {
    title: "Projekte",
    projectIntro: "Einige der Projekte, an denen ich gearbeitet habe...",
    worldClockDescription:
      "Erstellung einer dynamischen Weltzeituhr-Anwendung, die die aktuelle Zeit und das Datum für jede vom Benutzer eingegebene Stadt liefert. Die App verfügt über eine sich ständig aktualisierende Uhr, die Minuten und Sekunden in Echtzeit zählt, um sicherzustellen, dass die Nutzer genaue Zeitinformationen für globale Städte erhalten.",
    weatherDescription:
      "Ich habe eine benutzerfreundliche Wetteranwendung als mein erstes Programmierprojekt entwickelt. Die Anwendung bietet Echtzeit-Wetter-Updates für jede Stadt weltweit. Durch einfaches Eingeben des Städtenamens können die Benutzer auf die aktuellen Wetterbedingungen zugreifen, einschließlich Temperatur, Luftfeuchtigkeit und Wetterbedingungen. Die App zeigt auch den aktuellen Tag und die Uhrzeit für die angegebene Stadt an.",
    forecastDescription:
      "Erstellung einer fortschrittlichen Wettervorhersageanwendung, die detaillierte Wetterinformationen für jede gesuchte Stadt liefert. Die App zeigt die aktuellen Wetterbedingungen, die Zeiten für Sonnenauf- und -untergang sowie eine 5-Tage-Wettervorhersage an und bietet den Nutzern umfassende Wetterdaten für eine bessere Planung.",
    recipeDescrition:
      "Entwicklung eines innovativen, KI-gesteuerten Rezeptgenerators, der den Nutzern die einfachsten und leckersten Rezepte auf der Grundlage der eingegebenen Zutaten oder einer spezifischen Rezeptsuche anbietet. Die CHEF-KI nutzt fortschrittliche Algorithmen, um einfach zu befolgende Kochanleitungen zu liefern und sicherzustellen, dass die Nutzer das Beste aus den Zutaten machen können, die sie zur Hand haben.",
    travelDescrition:
      "Dieses Projekt wurde erstellt, um meine Fähigkeiten bei der Erstellung von Websites zu demonstrieren und zu üben, indem ich nur CSS zur Gestaltung des gesamten HTML-Stils verwende. Dazu gehören Hero, Footer, Cards, Grids, Embeds, CSS-Filter und HTML-Tabelle. Ich habe mich für Prag entschieden, da es eine meiner zweiten Heimaten hier in Europa ist.",
    otherProjectDescrition: "Weitere Projekte...",
    // Add more translations as needed
  },
};

function switchLanguage(lang) {
  document.querySelector("#title").innerText = translations[lang].title;
  document.querySelector("#projects_intro").innerText =
    translations[lang].projectIntro;
  document.querySelector("#world_clock").innerText =
    translations[lang].worldClockDescription;
  document.querySelector("#weather_app").innerText =
    translations[lang].weatherDescription;
  document.querySelector("#weather_forecast").innerText =
    translations[lang].forecastDescription;
  document.querySelector("#recipe_ai").innerText =
    translations[lang].recipeDescrition;
  document.querySelector("#travel_website").innerText =
    translations[lang].travelDescrition;
  document.querySelector("#other_projects").innerText =
    translations[lang].otherProjectDescrition;
}
