<?php
include 'backend/session.php';
$_SESSION['page'] = 'Home';
header('location: public/index.php');
