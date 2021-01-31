<?php
// Define $_POST variable
$name = $_REQUEST['Name'];
$email = $_REQUEST['Email'];
$message = $_REQUEST['Message'];

// ensure that all the fields are filled up or correct

if (empty($name) || empty($email) || empty($message)) {
	echo "Please check the input fields!";
} else {
	mail("ruthvik4215@gmail.com", "personal website", $message, "From: $name <$email>");
	echo "<script type='text/javascript'>alert('Message sent succesfully!');window.history.log(-1);</script>";
}

?>