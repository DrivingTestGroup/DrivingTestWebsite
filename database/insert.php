<?php
include 'connectdb.php';
$name = test_input($_POST['name']);
$comment = test_input($_POST['comment']);
$date = date("Y/m/d");


//defines the function test_input
function test_input($data) {
  //allows the input of html code (ex. <br>)
  $data = htmlspecialchars($data);
          
  //adds a backslash if there is an apostrophe
  for ($i=0;$i<strlen($data);$i++) {
    //escapes single quotes
    if ($data[$i] == "'" or $data[$i] == "\\"){
      $data = substr_replace($data,"\\",$i,0);
      $i++;
    }
  }

  return $data;
}



$sql = "INSERT INTO Comment_Section (Name, Comment, Date)
VALUES ('$name', '$comment', '$date')";

if ($conn->query($sql) === TRUE) {
    //echo "<br><br>New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
