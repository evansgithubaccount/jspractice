let myVar = "a"

switch (myVar) {
    case "a":
        console.log("Hey")
        break;
    case "b":
        console.log("Foo Bar")
        break;
    case "c":
        console.log("Bar")
        break;
    default:
        break;
}

var weapons = ["rock", "paper", "scissors"];

var Player1 = 0
var Player2 = 0

while (Player1<3 && Player2<3) {
    var woc1 = weapons[Math.floor(Math.random() * weapons.length)]
    console.log("Player One chooses " + woc1)
    var woc2 = weapons[Math.floor(Math.random() * weapons.length)]
    console.log("Player Two chooses " + woc2)
    if (woc1 == woc2) {
        console.log("It's a draw")
    }
    if ((woc1=="rock" && woc2=="scissors")||(woc1=="paper"&&woc2=="rock")||(woc1=="scissors"&&woc2=="paper")) {
        Player1++
        console.log("Player One wins this round")
        console.log("The score is " + Player1 + " to " + Player2)
    }
    if ((woc2=="rock" && woc1=="scissors")||(woc2=="paper"&&woc1=="rock")||(woc2=="scissors"&&woc1=="paper")) {
        Player2++
        console.log("Player Two wins this round")
        console.log("The score is " + Player1 + " to " + Player2)
    }
}

if (Player1==3) {
    console.log("Player One Wins")
}

if (Player2==3) {
    console.log("Player Two Wins")
}

console.log("The final score is " + Player1 + " to " + Player2)
