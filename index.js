let homeScore = 0
let guestScore = 0

let homeInsert =  document.getElementById("score-home")
let guestInsert = document.getElementById("score-guest")

function add1Home() {
    homeInsert.textContent = homeScore += 1
    console.log(homeScore)
}

function add2Home() {
    homeInsert.textContent = homeScore += 2
}

function add3Home() {
    homeInsert.textContent = homeScore +=3
}

function add1Guest() {
    guestInsert.textContent = guestScore += 1
}

function add2Guest() {
    guestInsert.textContent = guestScore +=2
}

function add3Guest() {
    guestInsert.textContent = guestScore +=3
}

function newGame() {
    homeScore = 0
    homeInsert.textContent = homeScore
    guestScore = 0
    guestInsert.textContent = guestScore
}