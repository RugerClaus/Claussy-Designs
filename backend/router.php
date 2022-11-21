<?php

include 'session.php';

if(isset($_GET['home'])){
    $_SESSION['page'] = 'Home';
    $page = $_SESSION['page'];
    header("location: ../public/index.php?=$page");
}
if(isset($_GET['portfolio'])){
    $_SESSION['page'] = 'Portfolio';
    $page = $_SESSION['page'];
    header("location: ../public/index.php?=$page");
}
if(isset($_GET['services'])){
    $_SESSION['page'] = 'Services';
    $page = $_SESSION['page'];
    header("location: ../public/index.php?=$page");
}
if(isset($_GET['contact'])){
    $_SESSION['page'] = 'Contact';
    $page = $_SESSION['page'];
    header("location: ../public/index.php?=$page");
}