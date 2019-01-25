<?php
include '../navigation_bar/navigation.php';
?>

<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="contacts.css">
  </head>
  <body>
    <div class="content">

      <h1> Contact Us!</h1>

      <div class="contact_box">
          <p class="paragraph">For more information, visit <a class="more_info" href='https://www.ontario.ca/document/official-mto-drivers-handbook/getting-your-drivers-licence'>Getting Your Driver's Licence</a>
            or email us at gettingyourg1@gmail.ca!</p>
      </div>
        <div class="comment_area">
          <p class="comment_title">If you have any questions or suggestions, leave a comment down below</p>
          <div class="comment_ask">
            <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
            Name: <input type="text" name="name" placeholder="Name"><br>
            Comment:<br> <textarea rows="4" cols="50" name="comment" placeholder="Enter comment here.."></textarea><br>
            <input type="submit" name="enter" value="Submit">
            </form>

          </div>
          <?php
          //insert user data into the database
          if (isset($_POST['enter'])){
              include'../database/insert.php';
          }
          

          //include '../database/insert.php';
          include '../database/report.php';
          ?>
        </div>



    </div>
  </body>
</html>

<?php
include '../footer/footer.php';
?>
