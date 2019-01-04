<?php
include '../navigation_bar/navigation.php';
?>

<html>
  <head>
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="quiz_style.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="js/medium_quiz.js"></script>
  </head>
  <body>
    <div class="background medium_start_background" id="background">  
    <div class="quiz_container">
      <p class="counter" id="number"></p>
      <div class="quiz" id="que">
        <h>Medium Quiz!</h>
        <br>
        <button class="start_end"onclick='question()'>Start</button>

      <div id="correct"></div>
      <div id="menu"></div>
      </div>
    </div>
  </div>
</body>
</html>

<?php
include '../footer/footer.php';
?>
