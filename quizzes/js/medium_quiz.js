var ans, i, len, x, z, y, counter=0, j= -1, n, num=0;
var q=[
        "Never change lanes in traffic without:",
        "What must a driver do before entering a highway from a private road or driveway?",
        "When you are deciding whether or not to make a U-turn, your first consideration should be to check:",
        "When approaching an intersection where a traffic signal light is red and a police officer motions you to go through, you should:",
        "To get your vehicle out of a skid, you should first:"
        ];
var a=[
        'Looking in the rear view mirror only', 
        'Yield right-of-way to all vehicles approaching on the highway.\n',
        'Turning radius of your car.',
        'Wiat for the light to turn green.',
        'Apply brakes hard'
        ];
var alen= a.length;
var b=[
        'Giving proper signal and looking to make sure the move can be made safely.\n', 
        'Enter or cross the highway as quickly as possible.',
        'Height of curb.',
        'Obey the officers signal and go throught at once.\n',
        'Steer straight ahead'
        ];
var c=[
        'Blowing your horn and looking to the rear.', 
        'Sound horn and proceed with caution.',
        'Presence of trees, fire hydrants or poles near the curb.',
        'Stop to make sure s/he want you to go through',
        'Steer in the direction you want to go\n'
        ];
var d=[
        'Decreasing speed and giving correct signal.', 
        'Give hand signal then take right-of-way.',
        'Traffic regulations.\n',
        "Call the officer's attention to the red light",
        'Steer in the opposite direction of the skid'
        ];
function question() {
j++;
num++;
document.getElementById("number").innerHTML = num + "/10 Questions";
document.getElementById("que").innerHTML ='<p>'+ q[j] +'</p><br><form><input type="radio" name="choice" value="'+ a[j] +'">'+ a[j] +'<br><input type="radio" name="choice" value="'+ b[j] +'">'+ b[j] +'<br><input type="radio" name="choice" value="'+ c[j] +'">'+ c[j] +'<br><input type="radio" name="choice" value="'+ d[j] +'">'+ d[j] +'<br></form><button onclick="answer('+ j +')">Submit Answer</button><div id="correct"></div><div id="menu"></div>';
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
  if (x == "") {
   document.getElementById("correct").innerHTML = "Please pick an answer";
  }else if (x == n) {
    counter++;
   document.getElementById("correct").innerHTML = "Correct!";
  } else {
   document.getElementById("correct").innerHTML = "Incorrect! <br> The correct answer was: "+ n;
  }
if ((h+1) > (alen-1)){
document.getElementById("menu").innerHTML =
'<button onclick="end()">End of Quiz!</button>'
}else{
  document.getElementById("menu").innerHTML =
'<button onclick="question()">Next Question!</button>'
}
}
function end(){
document.getElementById("number").innerHTML = "";
    if (counter == 10){
      document.getElementById("que").innerHTML = "Perfect! <br> You got "+ counter +"/10!";
    }else if (counter > 7){
      document.getElementById("que").innerHTML = "Awesome! <br> You got "+ counter +"/10!";
    }else if (counter > 5){
      document.getElementById("que").innerHTML = "Practice Makes Perfect! You got "+ counter +"/10!";
    }else if (counter > 3){
      document.getElementById("que").innerHTML = "Good Try!  <br> You got "+counter +"/10!";
   }else{
      document.getElementById("que").innerHTML = "More practice may be needed. <br> You got "+ counter +"/10!";
   }
document.getElementById("que").innerHTML +=
'<br><button onclick= "retry()">Retry!</button>'
document.getElementById("que").innerHTML +=
'<br><a href="Hard_Quiz.html">Try the Hard Quiz!</a>'
}
function retry(){
j=-1;
counter=0;
question();
}
