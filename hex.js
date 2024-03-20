const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const footer = document.querySelectorAll("footer")
const author = document.querySelectorAll("footer a")

btn.addEventListener("click", function() {
    let hexColor= "#"
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    const complementaryHexColor = getComplementaryColor(hexColor)
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor

    footer.forEach(function(footerElement) {
        footerElement.style.backgroundColor = hexColor
        footerElement.style.color = complementaryHexColor
    })
    author.forEach(function(authorElement) {
        authorElement.style.color = hexColor
        authorElement.style.color = complementaryHexColor
    })
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

function getComplementaryColor(hexColor) {
    const r = parseInt(hexColor.substring(1, 3), 16)
    const g = parseInt(hexColor.substring(3, 5), 16)
    const b = parseInt(hexColor.substring(5, 7), 16)

    const complementaryR = (255 - r).toString(16).padStart(2, '0')
    const complementaryG = (255 - g).toString(16).padStart(2, '0')
    const complementaryB = (255 - b).toString(16).padStart(2, '0')

    const complementaryHex = `#${complementaryR}${complementaryG}${complementaryB}`

    return complementaryHex
}