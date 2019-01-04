var ans, i, len, x, z, y, counter=0, j= -1, n, num=0;
var q=[
        "Never change lanes in traffic without:",
        "What must a driver do before entering a highway from a private road or driveway?",
        "When you are deciding whether or not to make a U-turn, your first consideration should be to check:",
        "When approaching an intersection where a traffic signal light is red and a police officer motions you to go through, you should:",
        "To get your vehicle out of a skid, you should first:",
        "Under what circumstances may a driver's licence be cancelled?",
        "When approaching a sign that reads 'merging traffic,' you must:",
        "When the driver of another vehicle is about to overtake and pass your vehicle, you must:",
        "When you are in a roundabout:",
        "Which of the following has the right-of-way over all others at an intersection when the signal light is green?"
        ];
var a=[
        'Looking in the rear view mirror only.', 
        'Yield right-of-way to all vehicles approaching on the highway.\n',
        'Turning radius of your car.',
        'Wait for the light to turn green.',
        'Apply brakes hard.',
        "For failure to attend driver re-examination.",
        "Adjust your speed and position to avoid collision with other vehicles.\n",
        "Speed up so that passing is not necessary.",
        "You may stop for any reason.",
        "Vehicles turning right."
        ];
var alen= a.length;
var b=[
        'Giving proper signal and looking to make sure the move can be made safely.\n', 
        'Enter or cross the highway as quickly as possible.',
        'Height of curb.',
        'Obey the officers signal and go throught at once.\n',
        'Steer straight ahead.',
        "For possesion of altered driver's licence.",
        "Honk your horn berfore proceeding.",
        "Move to the left to prevent passing.",
        "Keep to the right of the center island and drive in a counter-clockwise direction until you reach your exit.\n",
        "Pedestrians crossing against the light."
        ];
var c=[
        'Blowing your horn and looking to the rear.', 
        'Sound horn and proceed with caution.',
        'Presence of trees, fire hydrants or poles near the curb.',
        'Stop to make sure s/he want you to go through',
        'Steer in the direction you want to go.\n',
        "For failure to properly complete a driver re-examination.",
        "Let the cars behind you go first.",
        "Signal to the other driver not to pass.",
        "You may pass large vehicles and change lanes.",
        "Pedsetrians crossing with the light.\n"
        ];
var d=[
        'Decreasing speed and giving correct signal.', 
        'Give hand signal then take right-of-way.',
        'Traffic regulations.\n',
        "Call the officer's attention to the red light",
        'Steer in the opposite direction of the skid.',
        "Any of the above.\n",
        "Stop before proceeding.",
        "Move to the right and allow such vehicle to pass.\n",
        "Do not do any of the above!\n",
        "Vehicles turing left."
        ];
function question() {
j++;
num++;
switch_image();
document.getElementById("number").innerHTML = num + "/10 Questions";
document.getElementById("que").innerHTML ='<p class="quiz_question">'+ q[j] +'</p><br><form><label class="radio_container"><input type="radio" name="choice" value="'+ a[j] +'"><span class="checkmark"></span><div class="selection_wrap"><p class="selection">' + a[j] + '</p></div></label><br><label class="radio_container"><input type="radio" name="choice" value="' + b[j] +'"><span class="checkmark"></span><div class="selection_wrap"><p class="selection">' + b[j] + '</p></div>'+'</label><br><label class="radio_container"><input type="radio" name="choice" value="'+ c[j] +'"><span class="checkmark"></span><div class="selection_wrap"><p class="selection">'+ c[j] + '</p></div>'+'</label><br><label class="radio_container"><input type="radio" name="choice" value="'+ d[j] +'"><span class="checkmark"></span><div class="selection_wrap"><p class="selection">'+ d[j] + '</p></div>'+ '</label><br></form><button id="submitAnswer" onclick="answer('+ j +')">Submit Answer</button><div id="correct"></div><div id="menu"></div>';
  
//shows the counter
document.getElementById("number").classList.add("counter_show");
}
function answer(h) {
  x ="";
  ans = document.getElementsByName('choice');
  len = ans.length;
  for (i = 0; i < len; i++) {
      if (ans[i].checked) {
         x = ans[i].value; 
         break;
       }
  }
var all=[a[h], b[h], c[h], d[h]];
for (y = 0; y < 4; y++){
  n = all[y].endsWith("\n");
  if (n == true){
    n=all[y];
    break;
  }
}

//checks it is the last question
if ((h+1) > (alen-1)){
  validate();
  document.getElementById("menu").innerHTML =
'<button onclick="end()">End of Quiz!</button>'
}else{
  validate();
  if (document.getElementById("correct").innerHTML == "Correct!" ||  document.getElementById("correct").innerHTML == "Incorrect! <br> The correct answer was: "+ n) {
    document.getElementById("menu").innerHTML = '<button class="next_question"onclick="question()">Next Question!</button>';
  }
}
}


//checks if the answer is right or wrong
function validate() {
  if (x == "") {
   document.getElementById("correct").innerHTML = "Please pick an answer";
  }else if (x == n) {
    counter++;
    document.getElementById("correct").innerHTML = "Correct!";
    document.getElementById("correct").classList.add("right");
    document.getElementById("submitAnswer").style.display = "none";
  } else {
   document.getElementById("correct").innerHTML = "Incorrect! <br> The correct answer was: "+ n;
   document.getElementById("correct").classList.add("wrong");
   document.getElementById("submitAnswer").style.display = "none";
  }
}


//switches background images when user reaches a certain question 
function switch_image() {
  if (num < 5 && num > 0) {
    document.getElementById("background").classList.remove("easy_second_background");
    document.getElementById("background").classList.add("easy_first_background");
  } else{
    document.getElementById("background").classList.remove("easy_first_background");
    document.getElementById("background").classList.add("easy_second_background");
  }
}


function end(){
//remove the counter
document.getElementById("number").classList.remove("counter_show");
  
document.getElementById("number").innerHTML = "";
    if (counter == 10){
      document.getElementById("que").innerHTML = "<p class='result'>Perfect!</p> <br> <p class='score'>You got "+ counter +"/10!</p>";
    }else if (counter > 7){
      document.getElementById("que").innerHTML = "<p class='result'>Awesome!</p> <br> <p class='score'>You got "+ counter +"/10!</p>";
    }else if (counter > 5){
      document.getElementById("que").innerHTML = "<p class='result'>Practice Makes Perfect!</p><br> <p class='score'>You got "+ counter +"/10!</p>";
    }else if (counter > 3){
      document.getElementById("que").innerHTML = "<p class='result'>Good Try! </p><br> <p class='score'>You got "+counter +"/10!</p>";
   }else{
      document.getElementById("que").innerHTML = "<p class='result'>More practice may be needed.</p> <br> <p class='score'>You got "+ counter +"/10!</p>";
   }
document.getElementById("que").innerHTML +=
'<br><button onclick= "retry()">Retry!</button>';
document.getElementById("que").innerHTML +=
'<br><a class="quiz_link" href="https://wwwg1drivingtestwebsitetk.000webhostapp.com/quizzes/Medium_Quiz.php">Try the Medium Quiz!</a>';
document.getElementById("que").innerHTML +=
'<div class="quiz_underline medium_line"></div>';
}
function retry(){
j=-1;
counter=0;
num=0;
question();
}
