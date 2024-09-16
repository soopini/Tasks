<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<form action="index.php" method="GET">
  <label for="username">Username:</label>
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>
    
</body>
</html>




<?php 
echo "Hello World<br>";
echo "The current date and time is: " . date("Y-m-d H:i:s");

if(isset($_GET["username"]) && !empty($_GET["username"])){
    $username = $_GET["username"];
    echo "Hello $username!";
}

?>

