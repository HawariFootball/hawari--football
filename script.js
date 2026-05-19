function addPlayer() {
  const name = document.getElementById("playerName").value;
  const list = document.getElementById("playersList");

  if (name === "") return;

  const li = document.createElement("li");
  li.textContent = name;

  list.appendChild(li);
}
