let players = [];

function addPlayer() {
  let name = document.getElementById("name").value;
  let position = document.getElementById("position").value;

  if (name === "") return;

  players.push({ name, position });

  renderPlayers();

  document.getElementById("name").value = "";
}

function renderPlayers() {
  let list = document.getElementById("players");
  list.innerHTML = "";

  players.forEach((player, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${player.name} - ${player.position} 
    <button onclick="removePlayer(${index})">❌</button>`;
    list.appendChild(li);
  });
}

function removePlayer(index) {
  players.splice(index, 1);
  renderPlayers();
}

function divideTeams() {
  let shuffled = [...players].sort(() => 0.5 - Math.random());

  let team1 = [];
  let team2 = [];

  shuffled.forEach((player, index) => {
    if (index % 2 === 0) team1.push(player);
    else team2.push(player);
  });

  let teamsDiv = document.getElementById("teams");

  teamsDiv.innerHTML = `
    <h3>🔵 فريق 1</h3>
    ${team1.map(p => `<p>${p.name} (${p.position})</p>`).join("")}

    <h3>🔴 فريق 2</h3>
    ${team2.map(p => `<p>${p.name} (${p.position})</p>`).join("")}
  `;
}
