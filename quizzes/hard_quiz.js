var ans, i, len, x, z, y, counter=0, j= -1, n, num=0;
var q=[
        "To get your vehicle out of a skid, you should first:",
        "The world is round?"
        ];
var a=[
        'Steer straight ahead', 
        'hi'
        ];
var alen= a.length;
var b=[
        'Steer in the opposite direction of the skid', 
        'greetings'
        ];
var c=[
        'Steer in the direction you want to go\n', 
        'bye'
        ];
var d=[
        'Apply brakes hard', 
        'hello\n'
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
   document.getElementById("correct").innerHTML = "PLease pick an answer";
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
      document.getElementById("que").innerHTML = "Practice Makes Perfect! You got "+ counter +"/20!";
    }else if (counter > 3){
      document.getElementById("que").innerHTML = "Good Try!  <br> You got "+counter +"/10!";
   }else{
      document.getElementById("que").innerHTML = "More practice may be needed. <br> You got "+ counter +"/10!";
   }
document.getElementById("que").innerHTML +=
'<br><button onclick= "retry()">Retry!</button>'
}
function retry(){
j=-1;
counter=0;
question();
}
