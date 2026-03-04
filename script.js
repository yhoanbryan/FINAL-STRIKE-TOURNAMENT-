const playersDiv = document.getElementById("players");

// Création automatique des 8 joueurs
for (let i = 1; i <= 8; i++) {
  playersDiv.innerHTML += `
    <h3>Player ${i}</h3>
    <input type="text" placeholder="Player ${i} Pseudo" required id="p${i}">
    <input type="text" placeholder="Player ${i} CODM UID" required id="id${i}">
  `;
}

document.getElementById("teamForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const team = document.getElementById("team").value;
  const leader = document.getElementById("leader").value;
  const whatsapp = document.getElementById("whatsapp").value;

  let message =
    "🏆 CODM TEAM REGISTRATION %0A%0A" +
    "Team: " + team + "%0A" +
    "Leader: " + leader + "%0A" +
    "WhatsApp: " + whatsapp + "%0A%0APlayers:%0A";

  for (let i = 1; i <= 8; i++) {
    const pseudo = document.getElementById("p"+i).value;
    const uid = document.getElementById("id"+i).value;
    message += i + ". " + pseudo + " - " + uid + "%0A";
  }

  // ⚠️ REMPLACE PAR TON NUMÉRO WHATSAPP
  const phoneNumber = "250798696633";

  const whatsappLink =
    "https://wa.me/" + +250798696633 + "?text=" + message;

  window.open(whatsappLink, "_blank");
});
