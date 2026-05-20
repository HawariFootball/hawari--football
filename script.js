function addPlayer() {
  let name = document.getElementById("name").value;
  let position = document.getElementById("position").value;

  if (name === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${name} - ${position} <button onclick="this.parentElement.remove()">❌</button>`;

  document.getElementById("players").appendChild(li);

  document.getElementById("name").value = "";
}
