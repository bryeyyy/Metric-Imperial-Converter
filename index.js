const inputnumber = document.querySelector("#numberinput")
const convertbtn = document.querySelector("#convertbtn")

const meterEl = document.querySelector("#meters")
const feetEl = document.querySelector("#feet")
const litersEl = document.querySelector("#liters")
const gallonsEl = document.querySelector("#gallons")
const kilosEl = document.querySelector("#kilo")
const poundsEl = document.querySelector("#pounds")
let givenEl = document.getElementsByClassName("given")

function getgiven (){
    let given = inputnumber.value
    return given
}

function roundup(number){
    const roundfactor = Math.pow(10, 3)
    const round = Math.round(number * roundfactor) / roundfactor
    return round
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convert(){
    
    given = getgiven()
    
    if (given == ""){
        alert("Please input a number.")
        return
    }
    //convert length
    const meters = given/3.281
    const feet = given*3.281

    //convert vol
    const liters = given/0.264
    const gallons = given*0.264

    //convert mass
    const kilos = given/2.204
    const pounds = given*2.204
    
    for (let i = 0; i < givenEl.length; i++){
        givenEl[i].innerHTML = given
    }

    meterEl.textContent = roundup(meters)
    feetEl.textContent = roundup(feet)
    litersEl.textContent = roundup(liters)
    gallonsEl.textContent = roundup(gallons)
    kilosEl.textContent = roundup(kilos)
    poundsEl.textContent = roundup(pounds)
}

inputnumber.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        convert()
    }
})