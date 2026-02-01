const initBtn = document.getElementById("init-btn");
const resetBtn = document.getElementById("reset-btn");
const blueBox = document.getElementById("blue-box");

// 1. START: Aktiviert das Div
initBtn.addEventListener("click", () => {
  initBtn.style.display = "none";
  blueBox.classList.remove("is-bouncing"); // Falls vorhanden
  blueBox.classList.add("is-active");
});

// 2. ABFLUG: Bei Klick auf das aktive Div
blueBox.addEventListener("click", () => {
  if (blueBox.classList.contains("is-active")) {
    blueBox.classList.remove("is-active");
    blueBox.classList.add("is-flying");

    // Reset-Button nach dem Flug zeigen
    setTimeout(() => {
      resetBtn.style.display = "block";
    }, 1200);
  }
});

// 3. RESET ZUM ANFANG: Alles auf Null
resetBtn.addEventListener("click", () => {
  resetBtn.style.display = "none";
  blueBox.classList.remove("is-flying");

  // Mauersprung ausführen
  blueBox.classList.add("is-bouncing");

  // Zurück in den gesperrten Zustand wie beim Reload
  setTimeout(() => {
    initBtn.style.display = "block"; // Startknopf kommt zurück
    // Div bleibt sichtbar durch is-bouncing 'forwards',
    // ist aber NICHT hoverbar, da 'is-active' fehlt.
  }, 800);
});
