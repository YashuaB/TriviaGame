
$(document).ready(function(){


  var score = 0
var unanswered = 0
var correctAnsw = 0
var wrongAnsw = 0
var time = 120;
var clockTimer;
var clockIsOn = false;
// need click event to tie into start of game with also a time delay for the timer?

// the start button is going to have take the whole display and have matching background

//alternate start screen make button link to game page!!!!!
initializeGame()


function initializeGame(){
  //must select the whole start container and divs within to hide
  // when game start display all style when start is clicked but set default state display none!!!
  $("#start-button").append("<button>" + "start" + "</button>")
  
  $("#start-button").click(function(){
    $(".button-background").css({display:"none"})
    startClock()
   
  }) 
}





function startClock(){
  if (!clockIsOn){
    clockTimer = setInterval(timeDecrease,1000);
    clockIsOn = true;
  }
}

function timeDecrease(){

  time--;

 var timer = timerDisplay(time)
  

  if( time === 0){
    stopClock();
  }
console.log(timer)
  $("#timer").text(timer);
}


function timerDisplay(time){
  var minutes = Math.floor(time/60);
    var seconds = time - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}


function stopClock(){
  clearInterval(clockTimer);
  clockIsOn = false;
 // gameOver()
//stop clock need to change page 
//display to wins and loses & stop clock
}
// do i need game over function or should it be in the StopClock as on function?
 function gameOver(){
   // pushing the scores to screen
   // transition to scoreboard screen
  $("wrong").text(unanswered)
  $("right").text(correctAnsw)
  $("not-answered").text(wrongAnsw)
}



/*****Quiz Logic *****/
// each form is going to have the value correct or incorrect
// create for loop to generate form radio buttons, then split the assign the correct answer the Class"right answer"
// the same for the wrong
//set radio button state to true or false then from that state assign it a count of unaswered
var array = [1,2,3,4]

for(var i = 0; i < array.length;++i){
  radio = $("<input>")

//I want iterate thru the array creating form element then asign unique value to each arrary
}





userPick;
$("#quiz").click(function(){
//get value of user pick
})

if( userPick === answer// another way to check answer, userPick === John || will || fredd && timer === 0, check if timer
  ) {
  // zero to increment answer but not before
 correctAnsw++;

}
if ( userpick === wronganswer){


}

})

