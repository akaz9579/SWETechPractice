let count = 0;

const countLabel = document.getElementById("count");
const dButton = document.getElementById("decrease");
const iButton = document.getElementById("increase");
const rButton = document.getElementById("reset");

function update() {
  countLabel.textContent = count;
}

function decrease() {
  count--;
  update();
}

function increase() {
  count++;
  update();
}

function reset() {
  count = 0;
  update();
}

dButton.onclick = decrease;
iButton.onclick = increase;
rButton.onclick = reset;