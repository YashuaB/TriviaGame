
$(document).ready(function(){


  var score = 0
var unanswered = 0
var correctAnsw = 0
var wrongAnsw = 0
var time = 120;
var clockTimer;
var clockIsOn = false;
var checkBoxAnswValue = []

// need click event to tie into start of game with also a time delay for the timer?

// the start button is going to have take the whole display and have matching background

//alternate start screen make button link to game page!!!!!
initializeGame()


function initializeGame(){
  //must select the whole start container and divs within to hide
  // when game start display all style when start is clicked but set default state display none!!!
  $("#start-button").append("<button>" + "start" + "</button>")
   $("#start-button > button").addClass("button-style")

  $("#start-button").click(function(){
    $(".button-background").css({display:"none"})
       $(".hidden-container").css({display:"block"})

    startClock()
   
  }) 
}



var timer;

function startClock(){
  if (!clockIsOn){
    clockTimer = setInterval(timeDecrease,1000);
    clockIsOn = true;
  }
}

function timeDecrease(){

  time--;

  timer = timerDisplay(time)
  

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
  return minutes + " " + seconds;
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
  $("#wrong").text(unanswered)
  $("#right").text(correctAnsw)
  $("#not-answered").text(wrongAnsw)
}



/*****Quiz Logic *****/
// each form is going to have the value correct or incorrect
// create for loop to generate form radio buttons, then split the assign the correct answer the Class"right answer"
// the same for the wrong
//set radio button state to true or false then from that state assign it a count of unaswered
//var array = [1,2,3,4]

$("input:checkbox").click(function(){
  var check = $(this)
 
  if (check.is(":checked")){
  var checkGroup = "input:checkbox[name='" + check.attr("name") +"']"

  
  console.log($(this).val())
  
  $(checkGroup).prop("checked",false)
  check.prop("checked",true)
  } else{check.prop("checked", false)}



  // $("input:checkbox[name=hollywood]:checked").each
  // (function(){
  // $(this).attr("checkbox")
  // $(this).prop()
  // console.log( $(this).attr("checkbox"));
  // console.log( $(this).val());
  // })

  


})


//this button will call all the values from the check boxes and check them 
// against the game conditons, then display when and loses
// this button will show up as a window when  the time runs out or at the bottom of
// the screen? 


  function gameSubmit() {
    $("#done-button").append("<button>" + "Submit" + "</button>")
    $("#done-button > button").addClass("button-style")

    $("#done-button").click(function(){
      $(".hidden-container").css({ display: "none" })
      $(".score-board").css({ display: "block" })

      var checkValue = $(".question:checked")

        for(var i = 0; i < checkValue.length;i++){
          if(checkValue[i].checked){
            checkBoxAnswValue.push(checkValue[i].value)
            console.log(checkValue[i].value)
            console.log( checkBoxAnswValue)
          }
        }

          for(var i = 0; i < checkBoxAnswValue.length;i++){
            if(checkBoxAnswValue[i] === "wrong"){
              wrongAnsw++;
              console.log( wrongAnsw)
            } 
          }
    })
    
  }

  

  gameSubmit()





})

