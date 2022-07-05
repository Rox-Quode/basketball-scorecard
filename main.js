let homeScore = document.getElementById("home-score")
let home = 0
    
function increaseHomeScoreOne(){
    home = home + 1
    homeScore.textContent = home
    console.log(home)
}

function increaseHomeScoreTwo(){
    home = home + 2
    homeScore.textContent = home
    console.log(home)
}

function increaseHomeScoreThree(){
    home = home + 3
    homeScore.textContent = home
    console.log(home)
}

let guestScore = document.getElementById("guest-score")
let guest = 0
    
function increaseGuestScoreOne(){
    guest = guest + 1
    guestScore.textContent = guest
    console.log(guest)
}

function increaseGuestScoreTwo(){
    guest = guest + 2
    guestScore.textContent = guest
    console.log(guest)
}

function increaseGuestScoreThree(){
    guest = guest + 3
    guestScore.textContent = guest
    console.log(guest)
}