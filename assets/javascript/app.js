
$(document).ready(function () {


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


  // var answerObj = {
  //   question: "how old are you",
  //   answer: "25",
  //   correct: "25"
  // }
  //   for(var i in answerObj){
  //     if( $("input").checked && answerObj.answer === answer){
  //       ++correctAnsw;
      
  //     } else {
  //       ++wrongAnsw;
  //     }
  //   } }  if(checkbox === not checked){
  //     ++unanswered;

  // }

  var options = [
    {
      question: "Pupusas, handmade thick stuffed corn tortillas, are a traditional dish from what country?", 
      choice: ["Ethiopia", "El Salvadore", "Peru", "Guatamala"],
      answer: 1,
     },
     {
       question: "What popular soda beverage was originally developed as a mixer for whiskey?", 
      choice: ["Mountain Dew", "Sprite", "7-UP", "Coke"],
      answer: 0,
     }, 
     {
       question: "Kopi luwak is a very expensive type of what?", 
      choice: ["Spice", "Caviar", "Coffee", "Rice variety" ],
      answer: 2,
    }, 
    {
      question: "Which is not an ingredient in a Harvey Wallbanger cocktail?", 
      choice: ["Orange Juice", "Vodka", "Sour Mix", "Galliano" ],
      answer: 2,
    }, 
    {
      question: "How many items are there in a Bakers' Dozen?", 
      choice: ["12", "6", "24", "13" ],
      answer: 3,
    }, 
    {
      question: "What is the most widely eaten fish in the world?", 
      choice: ["Tilapia", "Herring", "Sardine", "Tuna" ],
      answer: 1,
    }, 
    {
      question: "Which fruit does not ripen once it has been picked?", 
      choice: ["Banana", "Lemon", "Mango", "Apple" ],
      answer: 1,
    }];
// works but can dive deeper in object
    // options.forEach(element => {
      
    //   $("input").attr("value", element.choice)
    // });

    // for (var i in options){
    //    $("input").attr("value", "answer")
    // }


    // for ( var i = 0; i < options.length;i++){
    //   $("input").attr("value", options.choice[i])
    // }
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
    // console.log(timer)
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
    gameOver()
    //stop clock need to change page 
    //display to wins and loses & stop clock
  }
  // do i need game over function or should it be in the StopClock as on function?
  function gameOver() {
    // pushing the scores to screen
    // transition to scoreboard screen
    $("#wrong").text(wrongAnsw)
    $("#right").text(correctAnsw)
    $(".score-board").css({display:"block"})
    // $("#not-answered").text()
  }



/*****Quiz Logic *****/
// each form is going to have the value correct or incorrect
// create for loop to generate form radio buttons, then split the assign the correct answer the Class"right answer"
// the same for the wrong
//set radio button state to true or false then from that state assign it a count of unaswered
//var array = [1,2,3,4]

// $("input:checkbox").click(function(){
//   var check = $(this)
 
//   if (check.is(":checked")){
//   var checkGroup = "input:checkbox[name='" + check.attr("name") +"']"

  
//   // console.log($(this).val())
  
//   $(checkGroup).prop("checked",false)
//   check.prop("checked",true)
//   } else{check.prop("checked", false)}



//   // $("input:checkbox[name=hollywood]:checked").each
//   // (function(){
//   // $(this).attr("checkbox")
//   // $(this).prop()
//   // console.log( $(this).attr("checkbox"));
//   // console.log( $(this).val());
//   // })

  


// })


//this button will call all the values from the check boxes and check them 
// against the game conditons, then display when and loses
// this button will show up as a window when  the time runs out or at the bottom of
// the screen? 




  
    $("#done-button").append("<button>" + "Submit" + "</button>")
    $("#done-button > button").addClass("button-style")

    $("#done-button").click(function(){
      $(".hidden-container").css({ display: "none" })
      $(".score-board").css({ display: "block" })
      // $.each($("input[name='hollywood']:checked")) 
      var checkValue = $.each($(".question:checked"), function(){

        console.log(checkValue)
      console.log($(this).val())
        
          if($(this).val()  === "correct"){
            correctAnsw++;
           

            console.log(correctAnsw)
            
            console.log( checkBoxAnswValue)

          } else if($(this).val() === "wrong"){
              wrongAnsw++;
             
              console.log(wrongAnsw)
              console.log( checkBoxAnswValue)
            } 
        
      })
      checkBoxAnswValue.push(wrongAnsw)
      checkBoxAnswValue.push(correctAnsw)
      console.log( checkBoxAnswValue)
          // for(var i = 0; i < checkBoxAnswValue.length;i++){
          //   if(checkBoxAnswValue[i] === "wrong"){
          //     wrongAnsw++;
          //     console.log( wrongAnsw)
          //   } 
          // }
          stopClock()
    })
    
  

  

  





})

