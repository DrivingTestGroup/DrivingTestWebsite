<?php
include 'connectdb.php';
?>

<br>

<?php

$sql = "SELECT * FROM Comment_Section";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
	    echo "<div class='comment_box'>";
    	echo "<span class='date'>" .$row["Date"]. "</span><p class='username'>" . $row["Name"]. "</p> <p class='comment'>" . $row["Comment"] . "<br>";
    	echo "</div>";
	}
} else {
	echo "0 results";
}
$conn->close();
?>
