
var ans, i, len, x, z, y, counter=0, j= -1, n, num=0;
var q=[
        "Stop Sign and White Line",
        "Stopped Bus",
        "Should You Go Slow or Fast?",
        "Who Should Go First?",
        "Should You Stay or Should You Go?",
        "Please Stop",
        ];
var a=[
        'Should you stop before the white line?\n', 
        'Should you keep going because you are coming from the opposite side of the road?',
        'Should you go below the speed limit and go slow?\n',
        'Should the Red car go first?',
        'Since the light is green, should you go?',
        "Should this collision not reported because no one was harmed and the damages were under $2000 dollars?\n",
        ];
var alen= a.length;
var b=[
        'Should you stop after the white line?',
        'Should you stop 20 meters from where the bus is stopped and only proceed until the bus moves or the overhead lights have stopped flashing?\n',
        'Should you drive fast in this weather because you have good tries with deep tread and you have clear visibility?',
        'Should the Blue car go first?\n',
        'Should you stay?\n',
        "Should this collision be reported?",
        ];
var c=[
        '../videos/stop_sign_and_white_line.mp4',
        '../videos/stopped_bus.mp4',
        '../videos/should_you_go _slow_or_fast.mp4',
        '../videos/who_should_go_first.mp4',
        '../videos/should_i_stay_or_should_i_go.mp4',
        '../videos/please_stop.mp4'
        ];
var d=[
        ' ',
        'Drivers on the opposite side of the road can proceed only if a medium is put up. (A median is a raised, lowered or earth strip dividing a road where vehicles travel in both directions.) ',
        ' ',
        'Because this is an all-way stop sign, the vehicle that stops first will be allowed to proceed first.',
        "Even knowing that it is your right of way, you should still stop so that you don't injure the pedestrian.",
        ' '
        ];

function question() {
j++;
num++;
document.getElementById("number").innerHTML = num + "/10 Questions";
document.getElementById("game").innerHTML ="<video width='320' height='240' autoplay loop><source src= '" + c[j] +"' type='video/mp4'><Your browser does not support the video tag.</video>";
document.getElementById("que").innerHTML = '<p class="quiz_question">'+ q[j] +'</p><br><form><label class="radio_container"><input type="radio" name="choice" value="'+ a[j] +'"><span class="checkmark"></span><div class="selection_wrap"><p class="selection">' + a[j] + '</p></div></label><br><label class="radio_container"><input type="radio" name="choice" value="' + b[j] +'"><span class="checkmark"></span><div class="selection_wrap"><p class="selection">' + b[j] + '</p></div>'+ '</label><br></form><button id="submitAnswer" onclick="answer('+ j +')">Submit Answer</button><div id="correct"></div><div id="menu"></div>';

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
  if (document.getElementById("correct").innerHTML == "Correct!" ||  document.getElementById("correct").innerHTML == "Incorrect! <br> The correct answer was: "+ n + "<br>"+ d[j] ) {
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
   document.getElementById("correct").innerHTML = "Incorrect! <br> The correct answer was: "+ n + "<br>" + d[j];
   document.getElementById("correct").classList.add("wrong");
   document.getElementById("submitAnswer").style.display = "none";
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
"<br><a class='quiz_link' href='game2.html'> Play Don't Crash!</a>";
document.getElementById("que").innerHTML +=
'<div class="quiz_underline hard_line"></div>';
}
function retry(){
j=-1;
counter=0;
num=0;
question();
}
