<?php
include '../navigation_bar/navigation.php';
?>

<html>

  <head>

    <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="../quizzes/quiz_style.css" rel="stylesheet" type="text/css" />
  
  <link href="road_selector.css" rel="stylesheet" type="text/css" />

  <script type="text/javascript" src="js/road_selector.js"></script>

  </head>

  <body>

    <div class="background medium_start_background" id="background">  

    <div class="quiz_container">

      <p class="counter" id="number"></p>

      <div id="game"></div>

      <div class="quiz" id="que">

        <h>Minigames!</h>

        <p>Watch the video then chose the correct answer!</p>

        <br>

        <button class="start_end" onclick='question()'>Start</button>

        

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
