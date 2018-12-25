<?php
include '../navigation_bar/navigation.php';
?>


<html>
  <head>
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link href="../navigation_bar/navigation_styles.css" rel="stylesheet" type="text/css" />
  <script src="js/hard_quiz.js"></script>
  </head>
  <body>
    <p id="number" style="float: right;"></p>
    <div class="container-fluid" id="que">
    <h>Hard Quiz!</h>
    <br>
    <button onclick='question()'>Start</button>

<div id="correct"></div>
<div id="menu"></div>

</div>
</body>
