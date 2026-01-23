// Game logic

const events = [
  {
    image: "img/sunniberg.jpg",
    year: 2005,
    location: "Klosters-Serneus",
    title: "Eröffnung der Sunnibergbrücke",
    context:
      "Am 9. Dezember 2005 wurde die Sunnibergbrücke von Heinz Dicht, vom damaligen Prinzen Charles, Moritz Leuenberger und Stefan Engler eröffnet.",
    isPortrait: true,
  },
  {
    image: "img/arosa2.jpg",
    year: 1920,
    location: "Arosa",
    title: "Schneesport",
    context:
      "Dieses Bild entstand im winterlichen Arosa, etwa 1920. Es stammt vom Fotografen Rudolf Zinggeler (1864–1954).",
    isPortrait: true,
  },
  {
    image: "img/marmorera.jpg",
    year: 1950,
    location: "Marmorera",
    title: "Schulklasse",
    context:
      "Ein Lehrer und Schulkinder aus Marmorera lassen sich ablichten (Aufnahme vermutlich aus dem Jahr 1950).",
    isPortrait: true,
  },
  {
    image: "img/davos2.jpg",
    year: 1910,
    location: "Davos",
    title: "Anfänge des Tourismus",
    context:
      "Die Anfänge des Tourismus in Davos, etwa 1910: Blick in Richtung Dischmatal.",
    isPortrait: true,
  },
  {
    image: "img/ilanz.jpg",
    year: 1955,
    location: "Ilanz",
    title: "Ford-Autos in der Surselva",
    context:
      "Der Churer Importeur Walter Tribolet besuchte 1955 mit den damals aktuellen Ford-Modellen die Garage von Johann Spescha in Ilanz.",
    isPortrait: true,
  },
  {
    image: "img/chur2.jpg",
    year: 2007,
    location: "Chur",
    title: "HR Giger in einer Bündner Ausstellung",
    context:
      "Der Churer Künstler HR Giger in seiner Ausstellung 'Das Schaffen vor Alien' im Kunstmuseum in Chur.",
    isPortrait: true,
  },
  {
    image: "img/stmoritz2.jpg",
    year: 1948,
    location: "St. Moritz",
    title: "Olympische Winterspiele in Graubünden",
    context:
      "Die kanadische Eiskunstläuferin Barbara Ann Scott bei den Olympischen Winterspielen in St. Moritz während des Pflichtprogramms (1948).",
    isPortrait: true,
  },
  {
    image: "img/freestyle.jpg",
    year: 1976,
    location: "St. Moritz",
    title: "Erster Ski-Freestyle-Wettbewerb",
    context:
      "In St. Moritz fand am 1. März 1976 zur Förderung des Freestyle-Skisports ein Pionierwettbewerb statt. Die FIS erkannte Freestyle-Skiing erst 1979 offiziell an.",
    isPortrait: true,
  },
  {
    image: "img/sanbernardino.jpg",
    year: 1965,
    location: "San Bernardino",
    title: "Durchschlag des San-Bernardino-Strassentunnels",
    context:
      "Am 10. April 1965 haben die Mineure im San-Bernardino-Strassentunnel den Durchschlag geschafft (Südportal, Eintreffen der Equipe Nord).",
    isPortrait: true,
  },
{
    image: "img/vereina.jpg",
    year: 1997,
    location: "Klosters-Selfranga",
    title: "Durchschlag am Vereina",
    context:
      "Am 26. März 1997 fanden die Durchschlagsfeierlichkeiten vor dem Vereinatunnel statt.",
    isPortrait: true,
  },
];

const cities = [
  "Almens",
  "Alvaneu",
  "Alvaschein",
  "Andeer",
  "Andiast",
  "Ardez",
  "Arosa",
  "Arvigo",
  "Avers",
  "Bergün/Bravuogn",
  "Bever",
  "Bivio",
  "Bonaduz",
  "Braggio",
  "Bregaglia",
  "Breil/Brigels",
  "Brienz/Brinzauls",
  "Brusio",
  "Buseno",
  "Cama",
  "Castaneda",
  "Casti-Wergenstein",
  "Castrisch",
  "Cauco",
  "Cazis",
  "Celerina/Schlarigna",
  "Chur",
  "Churwalden",
  "Conters i.P.",
  "Cunter",
  "Davos",
  "Disentis/Mustér",
  "Domat/Ems",
  "Donat",
  "Duvin",
  "Falera",
  "Felsberg",
  "Ferrera",
  "Fideris",
  "Filisur",
  "Fläsch",
  "Flerden",
  "Flims",
  "Ftan",
  "Furna",
  "Fürstenau",
  "Grono",
  "Grüsch",
  "Guarda",
  "Haldenstein",
  "Hinterrhein",
  "Ilanz",
  "Jenaz",
  "Jenins",
  "Klosters-Serneus",
  "Klosters-Selfranga",
  "Küblis",
  "La Punt-Chamues-ch",
  "Laax",
  "Ladir",
  "Landquart",
  "Lantsch/Lenz",
  "Lavin",
  "Leggia",
  "Lohn",
  "Lostallo",
  "Lumnezia",
  "Luven",
  "Luzein",
  "Madulain",
  "Maienfeld",
  "Maladers",
  "Malans",
  "Marmorera",
  "Masein",
  "Mathon",
  "Medel (Lucmagn)",
  "Mesocco",
  "Mon",
  "Mulegns",
  "Mundaun",
  "Mutten",
  "Nufenen",
  "Obersaxen",
  "Paspels",
  "Pigniu",
  "Pitasch",
  "Pontresina",
  "Poschiavo",
  "Pratval",
  "Rhäzüns",
  "Riein",
  "Riom-Parsonz",
  "Rodels",
  "Rongellen",
  "Rossa",
  "Rothenbrunnen",
  "Roveredo",
  "Rueun",
  "Ruschein",
  "Saas i.P.",
  "Safiental",
  "Sagogn",
  "Salouf",
  "Samedan",
  "Samnaun",
  "San Bernardino",
  "San Vittore",
  "Savognin",
  "S-chanf",
  "Scharans",
  "Schiers",
  "Schluein",
  "Schmitten",
  "Schnaus",
  "Scuol",
  "Seewis i.P.",
  "Selma",
  "Sent",
  "Sevgein",
  "Siat",
  "Sils i.D.",
  "Sils i.E./Segl",
  "Silvaplana",
  "Soazza",
  "Splügen",
  "St. Antönien",
  "St. Martin",
  "St. Moritz",
  "Sta. Maria i.C.",
  "Stierva",
  "Sufers",
  "Sumvitg",
  "Sur",
  "Surava",
  "Susch",
  "Tamins",
  "Tarasp",
  "Thusis",
  "Tiefencastel",
  "Tinizong-Rona",
  "Tomils",
  "Trimmis",
  "Trin",
  "Trun",
  "Tschappina",
  "Tschiertschen - Praden",
  "Tujetsch",
  "Untervaz",
  "Urmein",
  "Val Müstair",
  "Vals",
  "Valsot",
  "Vaz/Obervaz",
  "Verdabbio",
  "Waltensburg/Vuorz",
  "Zernez",
  "Zillis-Reischen",
  "Zizers",
  "Zuoz"
];

let currentRound = 0;
let totalScore = 0;
let results = [];
let currentResultSlide = 0;

// function initGame() {
//   updateDisplay();
//   setupEventListeners();
// }

function setupEventListeners() {
  const yearSlider = document.getElementById("yearSlider");
  const yearDisplay = document.getElementById("yearDisplay");
  const locationInput = document.getElementById("locationInput");
  const suggestions = document.getElementById("suggestions");

  yearSlider.addEventListener("input", (e) => {
    yearDisplay.textContent = e.target.value;
  });

  locationInput.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      showSuggestions(filtered);
    } else {
      suggestions.classList.remove("show");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".location-input-wrapper")) {
      suggestions.classList.remove("show");
    }
  });
}

function showSuggestions(filtered) {
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (filtered.length > 0) {
    filtered.forEach((city) => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = city;
      item.onclick = () => selectCity(city);
      suggestions.appendChild(item);
    });
    suggestions.classList.add("show");
  } else {
    suggestions.classList.remove("show");
  }
}

function selectCity(city) {
  document.getElementById("locationInput").value = city;
  document.getElementById("suggestions").classList.remove("show");
}

function updateDisplay() {
  const event = events[currentRound];
  const photoContainer = document.getElementById("photoContainer");
  photoContainer.style.backgroundImage = `url(${event.image})`;

  if (event.isPortrait) {
    photoContainer.classList.add("portrait-mode");
  } else {
    photoContainer.classList.remove("portrait-mode");
  }

  document.getElementById("currentRound").textContent = currentRound + 1;
  document.getElementById("currentScore").textContent = totalScore;
}

function submitGuess() {
  const guessedYear = parseInt(document.getElementById("yearSlider").value);
  const guessedLocation = document.getElementById("locationInput").value;
  const event = events[currentRound];

  const yearDiff = Math.abs(guessedYear - event.year);
  const locationCorrect =
    guessedLocation.toLowerCase() === event.location.toLowerCase();

  const yearScore = Math.max(0, 500 - yearDiff * 10);
  const locationScore = locationCorrect ? 500 : 0;
  const roundScore = yearScore + locationScore;

  results.push({
    round: currentRound + 1,
    yearDiff,
    locationCorrect,
    guessedYear,
    actualYear: event.year,
    guessedLocation,
    actualLocation: event.location,
    score: roundScore,
    title: event.title,
    context: event.context,
  });

  totalScore += roundScore;

  showResult(yearDiff, locationCorrect, event, roundScore);
}

function showResult(yearDiff, locationCorrect, event, score) {
  const popup = document.createElement("div");
  popup.className = "popup-overlay";
  popup.innerHTML = `
                <div class="popup-content">
                    <div class="popup-title">${event.title}</div>
                    <div class="popup-score">+${score} Punkte</div>
                    
                    <div class="popup-info">
                        <div class="popup-info-row">
                            <span class="popup-info-label">Jahre daneben:</span>
                            <span class="popup-info-value ${
                              yearDiff <= 10 ? "correct" : "incorrect"
                            }">${yearDiff} Jahre</span>
                        </div>
                        <div class="popup-info-row">
                            <span class="popup-info-label">Dein Ort:</span>
                            <span class="popup-info-value">${
                              results[results.length - 1].guessedLocation || "—"
                            }</span>
                        </div>
                        <div class="popup-info-row">
                            <span class="popup-info-label">Richtiger Ort:</span>
                            <span class="popup-info-value ${
                              locationCorrect ? "correct" : "incorrect"
                            }">${event.location}</span>
                        </div>
                    </div>
                    
                    <div class="popup-context">
                        ${event.context}
                    </div>
                    
                    <button class="btn btn-primary" onclick="closePopupAndNext()">
                        ${
                          currentRound < events.length - 1
                            ? "Nächste Runde"
                            : "Ergebnis anzeigen"
                        }
                    </button>
                </div>
            `;
  document.querySelector(".container").appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 10);
}

function closePopupAndNext() {
  const popup = document.querySelector(".popup-overlay");
  if (popup) {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.remove();
      nextRound();
    }, 300);
  }
}

function nextRound() {
  currentRound++;

  if (currentRound >= events.length) {
    showFinalResults();
  } else {
    const content = document.getElementById("contentArea");
    content.innerHTML = `
                    <div class="input-group">
        <div class="input-label">
            <span class="label-text">📅 Wann war das?</span> 
            <span class="year-display" id="yearDisplay">1962</span>
        </div>
        <input type="range" id="yearSlider" min="1900" max="2025" value="1962">
        <div class="range-labels">
            <span>1900</span>
            <span>2025</span>
        </div>
    </div>

    <div class="input-group">
        <div class="input-label">📍 Ort?</div>
        <div class="location-input-wrapper">
            <input type="text" id="locationInput" placeholder="Ort eingeben...">
            <div class="suggestions" id="suggestions"></div>
        </div>
    </div>

    <button class="btn btn-primary" onclick="submitGuess()">Antwort abgeben</button>
                `;
    updateDisplay();
    setupEventListeners();
  }
}

function showFinalResults() {
  currentResultSlide = 0;
  showResultSlide(currentResultSlide);
}

function showResultSlide(slideIndex) {
  const isFinalSummary = slideIndex === results.length;

  const canGoPrev = slideIndex > 0;
  const canGoNext = slideIndex < results.length;

  let arrowsHTML = `
                <div class="navigation-arrows">
                    <div class="arrow-btn ${
                      !canGoPrev ? "disabled" : ""
                    }" onclick="${
    canGoPrev ? "previousResultSlide()" : ""
  }">‹</div>
                    <div class="progress-container">
            `;

  for (let i = 0; i <= results.length; i++) {
    const dotClass =
      i < slideIndex ? "completed" : i === slideIndex ? "active" : "";
    arrowsHTML += `<div class="progress-dot ${dotClass}" onclick="navigateToSlide(${i})"></div>`;
  }

  arrowsHTML += `
                    </div>
                    <div class="arrow-btn ${
                      !canGoNext ? "disabled" : ""
                    }" onclick="${canGoNext ? "nextResultSlide()" : ""}">›</div>
                </div>
            `;

  let contentHTML = "";

  if (isFinalSummary) {
    const correctYears = results.filter((r) => r.yearDiff <= 10).length;
    const correctLocations = results.filter((r) => r.locationCorrect).length;

    contentHTML = `
                    <div class="final-summary">
                        <div class="popup-title">🏆 Spiel beendet!</div>
                        <div class="popup-score">${totalScore} Punkte</div>
                        
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-number">${correctYears}/10</div>
                                <div class="stat-label">Jahre korrekt<br>(±10 Jahre)</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${correctLocations}/10</div>
                                <div class="stat-label">Orte korrekt</div>
                            </div>
                        </div>
                    </div>
                `;
  } else {
    const result = results[slideIndex];
    contentHTML = `
                    <div class="popup-title">Runde ${result.round}: ${
      result.title
    }</div>
                    <div class="popup-score">+${result.score} Punkte</div>
                    
                    <div class="popup-info">
                        <div class="popup-info-row">
                            <span class="popup-info-label">Jahre daneben:</span>
                            <span class="popup-info-value ${
                              result.yearDiff <= 10 ? "correct" : "incorrect"
                            }">${result.yearDiff} Jahre</span>
                        </div>
                        <div class="popup-info-row">
                            <span class="popup-info-label">Richtiges Jahr:</span>
                            <span class="popup-info-value">${
                              result.actualYear
                            }</span>
                        </div>
                        <div class="popup-info-row">
                            <span class="popup-info-label">Dein Ort:</span>
                            <span class="popup-info-value">${
                              result.guessedLocation || "—"
                            }</span>
                        </div>
                        <div class="popup-info-row">
                            <span class="popup-info-label">Richtiger Ort:</span>
                            <span class="popup-info-value ${
                              result.locationCorrect ? "correct" : "incorrect"
                            }">${result.actualLocation}</span>
                        </div>
                    </div>
                    
                    <div class="popup-context">
                        ${result.context}
                    </div>
                `;
  }

  const buttonText = isFinalSummary
    ? "Neues Spiel"
    : slideIndex === results.length - 1
    ? "Zusammenfassung"
    : "Weiter";
  const buttonAction = isFinalSummary ? "restartGame()" : "nextResultSlide()";

  const popup = document.createElement("div");
  popup.className = "popup-overlay show";
  popup.innerHTML = `
                <div class="popup-content">
                    ${arrowsHTML}
                    <div class="popup-body">
                        ${contentHTML}
                    </div>
                    <button class="btn btn-primary" onclick="${buttonAction}">${buttonText}</button>
                </div>
            `;

  const existingPopup = document.querySelector(".popup-overlay");
  if (existingPopup) {
    existingPopup.remove();
  }

  document.querySelector(".container").appendChild(popup);
}

function nextResultSlide() {
  currentResultSlide++;
  showResultSlide(currentResultSlide);
}

function previousResultSlide() {
  if (currentResultSlide > 0) {
    currentResultSlide--;
    showResultSlide(currentResultSlide);
  }
}

function navigateToSlide(index) {
  currentResultSlide = index;
  showResultSlide(currentResultSlide);
}

function restartGame() {
  const popup = document.querySelector(".popup-overlay");
  if (popup) {
    popup.remove();
  }

  currentRound = 0;
  totalScore = 0;
  results = [];
  currentResultSlide = 0;

  const content = document.getElementById("contentArea");
  content.innerHTML = `
<div class="input-group">
        <div class="input-label">
            <span class="label-text">📅 Wann war das?</span> 
            <span class="year-display" id="yearDisplay">1962</span>
        </div>
        <input type="range" id="yearSlider" min="1900" max="2025" value="1962">
        <div class="range-labels">
            <span>1900</span>
            <span>2025</span>
        </div>
    </div>

    <div class="input-group">
        <div class="input-label">📍 Ort?</div>
        <div class="location-input-wrapper">
            <input type="text" id="locationInput" placeholder="Ort eingeben...">
            <div class="suggestions" id="suggestions"></div>
        </div>
    </div>

    <button class="btn btn-primary" onclick="submitGuess()">Antwort abgeben</button>
            `;

  updateDisplay();
  setupEventListeners();
}

// Variable für den Zoom-Status (global oder am Anfang der Datei)
let isZoomed = false;

// 1. DIESE FUNKTIONEN GANZ UNTEN HINZUFÜGEN
function toggleZoom() {
  const photo = document.getElementById("photoContainer");
  const btn = document.getElementById("zoomBtn");
  
  isZoomed = !isZoomed;

  if (isZoomed) {
    photo.classList.add("zoomed");
    btn.textContent = "🔍";
    photo.addEventListener("mousemove", moveZoom);
  } else {
    resetZoomEffect();
  }
}

function resetZoomEffect() {
  const photo = document.getElementById("photoContainer");
  const btn = document.getElementById("zoomBtn");
  
  isZoomed = false;
  photo.classList.remove("zoomed");
  if (btn) btn.textContent = "🔍 Zoom";
  photo.style.backgroundPosition = "center";
  photo.removeEventListener("mousemove", moveZoom);
}

function moveZoom(e) {
  if (!isZoomed) return;
  const photo = document.getElementById("photoContainer");
  const rect = photo.getBoundingClientRect();
  
  // Berechnet die Position der Maus im Bild in Prozent
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  photo.style.backgroundPosition = `${x}% ${y}%`;
}

// 2. ERWEITERE DEINE BESTEHENDE updateDisplay FUNKTION
// Füge am Anfang der Funktion den Reset-Befehl ein:
function updateDisplay() {
  resetZoomEffect(); // <--- Diesen Aufruf hier einfügen!

  const event = events[currentRound];
  const photoContainer = document.getElementById("photoContainer");
  photoContainer.style.backgroundImage = `url(${event.image})`;

  if (event.isPortrait) {
    photoContainer.classList.add("portrait-mode");
  } else {
    photoContainer.classList.remove("portrait-mode");
  }

  document.getElementById("currentRound").textContent = currentRound + 1;
  document.getElementById("currentScore").textContent = totalScore;
}

function initGame() {
   updateDisplay();
   setupEventListeners();
}

initGame();