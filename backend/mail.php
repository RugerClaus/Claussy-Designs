<?php 

    $from = 'submissions@claussydesigns.com';

    if(isset($_POST['submit'])){
        $to = 'rogerrock12games@gmail.com';
        $subject = $_POST['subject'];
        $message = "<p>" . $_POST['message'] . "</p><p>Regards,</p><p>Roger</p>";
        $headers = $from;
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        mail($to,$subject,$message,$headers);
        header('location: ../index.php');
    }
?>