let currentAudio = null;

const colors = {
  "#7D5ABF": { name: "Purple Rain (Prince)", audio: "./sounds/7D5ABF.aac"},
  "#558F60": { name: "Green River (Creedence Clearwater Revival)",audio: "./sounds/558F60.aac"},
  "#875A21": { name: "Brown Sugar (The Rolling Stones)", audio: "./sounds/875A21.aac"},
  "#4980C7": { name: "Mr. Blue Sky (Electric Light Orchestra)",audio: "./sounds/4980C7.aac"},
  "#101115": { name: "Back in Black (AC/DC)", audio: "./sounds/101115.aac"},
  "#353791": { name: "True Blue (Madonna)",audio: "./sounds/353791.aac"},
  "#DB4238": { name: "The Lady in Red (Chris de Burgh)",audio: "./sounds/DB4238.aac"},
  "#DC143C": { name: "Crimson and Clover (Tommy James & the Shondells)",audio: "./sounds/DC143C.aac"},
  "#EB3911": { name: "Orange Crush (R.E.M.)",audio: "./sounds/EB3911.aac"},
  "#F6CF00": { name: "Yellow Submarine (The Beatles)", audio: "./sounds/F6CF00.aac"},
  "#F49ABE": { name: "The Pink Panther Theme (Henry Mancini)",audio: "./sounds/F49ABE.aac"},
  "#FFFFFF": { name: "White Rabbit (Jefferson Airplane)",audio: "./sounds/FFFFFF.aac"},
};

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  const selectedColor = colors[randomNumber];

  document.body.style.backgroundColor = randomNumber;
  color.textContent = selectedColor.name;

  if (currentAudio) {
    currentAudio.pause();
  }

  playAudio(selectedColor.audio);
});

function getRandomNumber() {
  const colorKeys = Object.keys(colors);
  return colorKeys[Math.floor(Math.random() * colorKeys.length)];
}

function playAudio(audio) {
  const audioElement = new Audio(audio);
  audioElement.play();
  currentAudio = audioElement;
}