var myGamePiece;
var myObstacles = [];
var myPeople = [];
var roadLine = [];
var grass1, grass2, gas = [];
var myOb = ["../pictures/car3.png", "../pictures/car2.png", "../pictures/car4.png", "../pictures/car5.png"];
var myPed = ["../pictures/man1.png", "../pictures/man2.png"];
var myPedY = [60, 60];
var myPedX = [30, 25];
var myScore;

function hide() {
  var x = document.getElementById("the");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function start(){
  hide();
  document.getElementById("the").innerHTML = ' ';
    //document.getElementById("hi").innerHTML = '<button onmousedown="moveup()" onmouseup="clearmove()" ontouchstart="moveup()">UP</button><br><br><button onmousedown="moveleft()" onmouseup="clearmove()" ontouchstart="moveleft()">LEFT</button><button onmousedown="moveright()" onmouseup="clearmove()" ontouchstart="moveright()">RIGHT</button><br><br><button onmousedown="movedown()" onmouseup="clearmove()" ontouchstart="movedown()">DOWN</button>';
    startGame();
}

function startGame() {
    myGamePiece = new component(80, 50, "../pictures/car.png", 10, 120, "image"); 
    myScore = new component("15px", "Consolas", "black", 370, 35, "text");
    grass1 = new component(600, 20, "#00b300", 0, 0);   
    grass2 = new component(600, 20, "#00b300", 0, 250);  
    myGameArea.start();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
            window.addEventListener('keydown', function (e) {
      myGameArea.key = e.keyCode;
    })
    window.addEventListener('keyup', function (e) {
      myGameArea.key = false;
    })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }    
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function component(width, height, color, x, y, type) {
            this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
          ctx = myGameArea.context;
    if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    }else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
} 

var bonus=0;
function updateGameArea() {
    var x, y, z, w, v, d, y1, k, s, d, r;
        for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            document.getElementById("hi").innerHTML = '<p id="score">Score: ' + (myGameArea.frameNo + bonus+1) + '<br> Good Game!<br><button onclick="location.reload()">Try Again?</button></p>'
        } 
    }
        for (i = 0; i < myPeople.length; i += 1) {
        if (myGamePiece.crashWith(myPeople[i])) {
            myGameArea.stop();
            document.getElementById("hi").innerHTML = '<p id="score">Score: ' + (myGameArea.frameNo + bonus+1) + '<br> Good Game!<br><button onclick="location.reload()">Try Again?</button></p>'
        } 
    }
    for (i = 0; i < gas.length; i += 1) {
        if (myGamePiece.crashWith(gas[i])) {
           bonus=bonus+500;
        gas.splice(i,1);
        } 
    }
    myGameArea.clear();
    myGamePiece.speedX = 0;
  myGamePiece.speedY = 0; 
  if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
  if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
  if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
  if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo <= 1000){
      d=250;
      k=-1;
    }else if (myGameArea.frameNo >= 4000){
      d=50;
      k=-3.5;
    }else if (myGameArea.frameNo >= 3000){
      d=100;
      k=-3;
    }else if (myGameArea.frameNo >= 2000){
      d=100;
      k=-2.5;
    }else if (myGameArea.frameNo >= 1500){
      d=150;
      k=-2;
    }else if (myGameArea.frameNo >= 1000){
      d=200;
      k=-1.5;
    }
    if (myGameArea.frameNo == 1 || everyinterval(d)) {
        x = myGameArea.canvas.width;
        y = Math.floor((Math.random() * (myGameArea.canvas.height-500)) + (myGameArea.canvas.height-60));
        a=Math.floor(Math.random() * 4);
        z= myOb[a];
        myObstacles.push(new component(60, 40, z, x, y, "image"));
    }
  
        if (myGameArea.frameNo >= 700 && everyinterval(300)) {
        x = myGameArea.canvas.width;
        y = myGameArea.canvas.height-5;
        a=Math.floor(Math.random() * 2);
        z= myPed[a];
        v= myPedX[a];
        w= myPedY[a];
        myPeople.push(new component(v, w, z, x, y, "image"));
    }
    grass1.update();
    grass2.update();
      if (myGameArea.frameNo == 50 || everyinterval(300)) {
        x = myGameArea.canvas.width;
        y = Math.floor((Math.random() * (myGameArea.canvas.height-500)) + (myGameArea.canvas.height-60));
        gas.push(new component(30, 30, "../pictures/green.png", x, y, "image"));
    }
    if (myGameArea.frameNo == 1 || everyinterval(100)) {
        x = myGameArea.canvas.width;
        y1 = myGameArea.canvas.height-500;
        roadLine.push(new component(70, 20, "#ffd11a", myGameArea.canvas.width, 130)); 
    }
    for (i = 0; i < roadLine.length; i += 1) {
        roadLine[i].x += -1;
        roadLine[i].update();
    }
        
    for (i = 0; i < gas.length; i += 1){
        gas[i].x += -1;
        gas[i].update();
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += k;
        myObstacles[i].update();
    }
    for (i = 0; i < myPeople.length; i += 1) {
        myPeople[i].y += -1;
        myPeople[i].x += k;
        myPeople[i].update();
    }
    myScore.text = "SCORE: " + (myGameArea.frameNo + bonus);
    myScore.update();
    myGamePiece.newPos(); 
    myGamePiece.update();
}
/*function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}*/
