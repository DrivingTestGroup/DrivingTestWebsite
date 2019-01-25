<?php
$servername = "localhost";
$username = "id8147643_root";
$password = "";
$db = "id8147643_g1drivingtest";

// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully<br>";
?>
