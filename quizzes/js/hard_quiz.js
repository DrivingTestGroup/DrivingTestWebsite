
var ans, i, len, x, z, y, counter=0, j= -1, n, num=0;
var q=[
        "How soon after a licensed driver changes his/her name or address is he/she required to notify the Ministry of Transportation and Communications?",
        "If you are convicted of careless driving, you will get six demerit points and can get:",
        "When changing lanes on a multi-lane highway, a driver should:",
        "When lights are required, drivers must use low-beam headlights:",
        "When 15 or more demerit points have accumulated on a record, the driver's licence is suspended:",
        "When passing a cyclist, leave at least ____ distance between your vehicle and the cyclist.",
        "If you are involved in an accident in which someone is injured, you must:",
        "Hydroplaning occurs during heavy rain when a vehicle's tires ride up above the water on the roadway. To help prevent hydroplaning, you should NOT:",
        "In a vehicle with manual transmission, when descending a steep hill, a good safe-driving practice is to:"
        ];
var a=[
        "Within 15 days.",
        'Your license suspened for up to two years.',
        'Activate emergency signals.',
        "Within 150m of an oncoming vehicle.\n",
        "For 3 months.",
        "1 metre.\n",
        "Report the accident to the Ministry of Transportation and Communication only.",
        "Ensure the tires are inflated to the proper tire preasure.",
        "Place gear shift in neutral."
        ];
var alen= a.length;
var b=[
        'Within 6 days.\n', 
        'A fine up to 2 years',
        'Honk at other drivers.',
        "Within 300m of an oncoming vehicle.",
        "At the discretion of the Ministry.",
        "0.5 metres.",
        "Report the accident at once to the nearest municipal or provincial police officer.",
        "Drive in outer lanes where water tends to accumulate.\n",
        "Gear down and allow engine to assist in breaking.\n"
        ];
var c=[
        'Within 30 days.', 
        'A jail sentence up to six months.',
        'Check mirors and signals before moving left or right.\n',
        "At their discretion. This is a safety practice, not a law.",
        "Automatically, and for 30 days, from recipt of the licence by the MTO.\n",
        "1 foot.",
        "Report the accident within 48 hours to the nearest municipal or provincial police officer.",
        "Reduce driving speed when driving in the rain.",
        "Turn of ignition."
        ];
var d=[
        'Any time prior to the renewal of the license.',
        'All of the above.\n',
        'Not concern themselves with the other drivers.',
        "Within 1km of an oncoming vehicle.",
        "Only if the licence is NOT used for business purposes.",
        "There is no minimum distance.",
        "Report the accident to your insurance company only.",
        "Ensure the tires on your vehicle have a good tread depth.",
        "Disengage clutch and coast."
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
}
function retry(){
j=-1;
counter=0;
question();
}
