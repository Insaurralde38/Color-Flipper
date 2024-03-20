let currentAudio = null

const colors = {
  "#800080": { name: "Purple Rain (Prince)", audio: "./sounds/7D5ABF.aac"},
  "#008000": { name: "Green River (Creedence Clearwater Revival)",audio: "./sounds/558F60.aac"},
  "#A52A2A": { name: "Brown Sugar (The Rolling Stones)", audio: "./sounds/875A21.aac"},
  "#87CEEB": { name: "Mr. Blue Sky (Electric Light Orchestra)",audio: "./sounds/4980C7.aac"},
  "#000000": { name: "Back in Black (AC/DC)", audio: "./sounds/101115.aac"},
  "#1E90FF": { name: "True Blue (Madonna)",audio: "./sounds/353791.aac"},
  "#FF0000": { name: "The Lady in Red (Chris de Burgh)",audio: "./sounds/DB4238.aac"},
  "#DC143C": { name: "Crimson and Clover (Tommy James & the Shondells)",audio: "./sounds/DC143C.aac"},
  "#FF4500": { name: "Orange Crush (R.E.M.)",audio: "./sounds/EB3911.aac"},
  "#FFD700": { name: "Yellow Submarine (The Beatles)", audio: "./sounds/F6CF00.aac"},
  "#FF69B4": { name: "The Pink Panther Theme (Henry Mancini)",audio: "./sounds/F49ABE.aac"},
  "#FFFFFF": { name: "White Rabbit (Jefferson Airplane)",audio: "./sounds/FFFFFF.aac"},
}

const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const footer = document.querySelectorAll("footer")
const author = document.querySelectorAll("footer a")

btn.addEventListener("click", function() {
  const randomNumber = getRandomNumber()
  const selectedColor = colors[randomNumber]
  document.body.style.backgroundColor = randomNumber
  color.textContent = selectedColor.name

  const complementaryColor = getComplementaryColor(randomNumber)
  footer.forEach(foot => {
      foot.style.color = complementaryColor
  })
  author.forEach(a => {
      a.style.color = complementaryColor
  })

  if (currentAudio) {
    currentAudio.pause()
  }

  currentAudio = playAudio(selectedColor.audio)
})

function getRandomNumber() {
  const colorKeys = Object.keys(colors)
  return colorKeys[Math.floor(Math.random() * colorKeys.length)]
}

function playAudio(audio) {
  const audioElement = new Audio(audio)
  audioElement.play()
  return audioElement
}

function getComplementaryColor(color) {
  const hex = color.slice(1)
  const complementaryHex = (0xffffff ^ parseInt(hex, 16)).toString(16).padStart(6, '0')
  return '#' + complementaryHex.toUpperCase()
}