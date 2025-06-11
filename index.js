// Generate random numbers between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set dice images
document.querySelector(".img1").setAttribute("src", "./assets/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./assets/dice" + randomNumber2 + ".png");

// Display result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Lola Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Naman wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw Lola Pola !";
}
