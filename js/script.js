// Game logic

const events = [
  {
    image: "img/sunniberg.jpg",
    year: 2005,
    location: "Klosters",
    title: "Eröffnung der Sunnibergbrücke",
    context:
      "Am 9. Dezember 2005 wurde die Sunnibergbrücke von Heinz Dicht, vom damaligen Prinzen Charles, Moritz Leuenberger und Stefan Engler eröffnet.",
    isPortrait: true,
  },
  {
    image: "img/Brandenburg_Gate_in_1989.jpg",
    year: 1989,
    location: "Berlin DE",
    title: "Fall der Berliner Mauer",
    context:
      "Nach 28 Jahren fiel die Berliner Mauer am 9. November 1989. Tausende feierten die Wiedervereinigung Deutschlands.",
    isPortrait: true,
  },
  {
    image: "img/MartinLutherKing.jpg",
    year: 1963,
    location: "Washington D.C.",
    title: "March on Washington",
    context:
      "Martin Luther King Jr. hielt seine berühmte 'I Have a Dream'-Rede vor über 250.000 Menschen.",
    isPortrait: true,
  },
  {
    image: "img/Kissing_the_War_Goodbye.jpg",
    year: 1945,
    location: "New York",
    title: "Ende des Zweiten Weltkriegs",
    context:
      "Jubelnde Menschenmengen in New York feiern das Ende des Zweiten Weltkriegs.",
    isPortrait: true,
  },
  {
    image: "img/Mandela_voting.jpg",
    year: 1994,
    location: "Johannesburg",
    title: "Erste demokratische Wahlen in Südafrika",
    context:
      "Nelson Mandela wurde zum ersten schwarzen Präsidenten Südafrikas gewählt, nachdem das Apartheid-Regime endete.",
    isPortrait: true,
  },
  {
    image: "img/",
    year: 1994,
    location: "",
    title: "",
    context:
      "",
    isPortrait: true,
  },
  {
    image: "img/",
    year: 1994,
    location: "",
    title: "",
    context:
      "",
    isPortrait: true,
  },
  {
    image: "img/",
    year: 1994,
    location: "",
    title: "",
    context:
      "",
    isPortrait: true,
  },
  {
    image: "img/",
    year: 1994,
    location: "",
    title: "",
    context:
      "",
    isPortrait: true,
  },
  {
    image: "img/",
    year: 1994,
    location: "",
    title: "",
    context:
      "",
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

function initGame() {
  updateDisplay();
  setupEventListeners();
}

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

  const yearScore = Math.max(0, 5000 - yearDiff * 100);
  const locationScore = locationCorrect ? 5000 : 0;
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
                              yearDiff <= 5 ? "correct" : "incorrect"
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
    const correctYears = results.filter((r) => r.yearDiff <= 5).length;
    const correctLocations = results.filter((r) => r.locationCorrect).length;

    contentHTML = `
                    <div class="final-summary">
                        <div class="popup-title">🏆 Spiel beendet!</div>
                        <div class="popup-score">${totalScore} Punkte</div>
                        
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-number">${correctYears}/5</div>
                                <div class="stat-label">Jahre korrekt<br>(±5 Jahre)</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${correctLocations}/5</div>
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
                              result.yearDiff <= 5 ? "correct" : "incorrect"
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

initGame();