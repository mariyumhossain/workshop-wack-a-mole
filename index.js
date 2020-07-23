

let score = 0;
var scoreDisplay = document.getElementById('score');
var gameSquare = document.getElementById("whack-a-mole")


console.log(scoreDisplay);

var hole = document.getElementsByClassName("hole")

var length = hole.length


setInterval(function(){
    var randomHoleNum = Math.floor(Math.random() * Math.floor(length))
    hole[randomHoleNum].classList.toggle("mole")

},2000)

gameSquare.addEventListener("click",function(click){
    if (click.target.matches(".mole")) { 
        score++
        scoreDisplay.innerText = score
        click.target.classList.remove('mole')
    }
})
