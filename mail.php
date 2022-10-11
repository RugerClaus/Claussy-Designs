<?php 
    $to = 'rogerrock12games@gmail.com';
    $headers = 'From: mail@claussydesigns.com';
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $name = $_POST['name'];
    mail($to,$subject,$message,$headers);
?>