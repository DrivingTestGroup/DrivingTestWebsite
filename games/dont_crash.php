<?php
include '../navigation_bar/navigation.php';
?>

<html>

<head>
  <link rel="stylesheet" type="text/css" href="dont_crash.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
  <div class="game_content" id="game_content">

  <p id="the">
  <h>Don't Crash!</h><br>

  <button onclick="start()">Start!</button><br>
Use your arrow keys to control your car!<br>
Don't get to close to the other cars and perdestians!<br>
Get the gas to increase your score!
  </p>
  
  <div id="gameWindow">
      <div id = "hi" style="text-align:center;width:480px;">
  </div>

  <script type="text/javascript" src="js/dont_crash.js"></script>
  </div>
</div>

</body>
</html>

<?php
include '../footer/footer.php';
?>
