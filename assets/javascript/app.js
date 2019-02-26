
$(document).ready(function () {


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


  function initializeGame() {
    //must select the whole start container and divs within to hide
    // when game start display all style when start is clicked but set default state display none!!!
    $("#start-button").append("<button>" + "start" + "</button>")
    $("#start-button > button").addClass("button-style")

    $("#start-button").click(function () {
      $(".button-background").css({ display: "none" })
      $(".hidden-container").css({ display: "block" })

      startClock()

    })
  }



  var timer;

  function startClock() {
    if (!clockIsOn) {
      clockTimer = setInterval(timeDecrease, 1000);
      clockIsOn = true;
    }
  }

  function timeDecrease() {

    time--;

    timer = timerDisplay(time)


    if (time === 0) {
      stopClock();
    }
    console.log(timer)
    $("#timer").text(timer);
  }


  function timerDisplay(time) {
    var minutes = Math.floor(time / 60);
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

 
  function stopClock() {
    clearInterval(clockTimer);
    clockIsOn = false;
    // gameOver()
    //stop clock need to change page 
    //display to wins and loses & stop clock
  }
  // do i need game over function or should it be in the StopClock as on function?
  function gameOver() {
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

  //for(var i = 0; i < array.length;++i){
  // radio = $("<input>")

  //I want iterate thru the array creating form element then asign unique value to each arrary
  //}
  var userPick = " ";

  $("input").click(function () {
    userPick = $(this).val()
    userPick2 = $(this)
    userPick3 = $(this)


    userPick3 = userPick3[0].checked
    answArray.push(userPick)
    // if value equal false and clicked  increse wrong answer
    // if value equal true and clicked increse right answer
    // if timer === 0 then check values of checkboxes then do above if's
    // else if boxes doesn't equal clicked increse not answered
    // then push score to the screen
    console.log(userPick)
    console.log(userPick2)
    console.log(userPick3)
    console.log(answArray)

  //   if (timer === 0 && userPick2 === userPick2 && userPick === "right"// another way to check answer, userPick === John || will || fredd && timer === 0, check if timer
  //   ) {
  //     // zero to increment answer but not before
  //     correctAnsw++;
  //     console.log(correctAnsw)
  //   }
  //   /*else if(timer === 0){
  //    gameOver()
  //  }*/
  //   else {
  //     wrongAnsw++;
  //     console.log(wrongAnsw)
  //   }


  })
  var rad = $("input:checkbox")
  var answArray = []
  function checkResults() {
    // go through all radio buttons, push to array right or wrong of checked value
    for(var i = 0; i < answArray.length;++i){
      if(answArray[i] === "wrong"){
        wrongAnsw++;
        console.log(answArray[i])
      }
    }
   
    
    
  }
  

  checkResults()
  // //function radioValue(radioName){
  // //var getRadio = $("input:.question").attr(radioName)
  // var rad = $("input[name='radio1']")
  // var rad2 = $("input[name='radio2']")
  // var rad3 = $("input[name='radio3']")
  // var rad4 = $("input[name='radio4']")
  // var rad5 = $("input[name='radio5']")
  // var rad6 = $("input[name='radio6']")
  // var rad7 = $("input[name='radio7']")
  // var rad8 = $("input[name='radio8']")
  // var rad9 = $("input[name='radio9']")
  //var rd1 = $("input[name='radio1']").prop("checked")

  // var ray = [rad, rad2, rad3, rad4, rad5, rad6, rad7, rad8, rad9]

  // for (var i = 0; i < ray.length; ++i) {
  //   //console.log(radioCheck)
  //   var radioCheck = $(ray[i]).change(function () {
  //     if (radioCheck.checked) {
  //       //  console.log(radioCheck)
  //     }
  //   })

  //   //$(ray[i]).prop("checked")
  //   //console.log(ray[i].prop("checked"))
  // }
  //var rd1 =

  //}


  //radioValue()




})

/*if( userPick === "right"// another way to check answer, userPick === John || will || fredd && timer === 0, check if timer
  ) {
  // zero to increment answer but not before
 correctAnsw++;
console.log(correctAnsw)
}
if ( userPick === "wrong"){
 wrongAnsw++;
console.log(wrongAnsw)
}
 */