<?php
    include '../backend/session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $_SESSION['page'] ?></title>
    <link rel="stylesheet" href="assets/stylesheets/main/index.css">
</head>
<body>
    <header class="header">
        <a href="https://github.com/RugerClaus" class="h-child-one"><img class="github" src="assets/icons/GitHub_Logo.png" alt=""></a>
        <h1 class="h-child-two">Claussy Designs</h1>
        <form action="../backend/router.php" method="get" class="h-child-three">
            <input type="submit" name="home" value="Home">
            <input type="submit" name="portfolio" value="Portfolio">
            <input type="submit" name="services" value="Services">
            <input type="submit" name="contact" value="Contact">
        </form>

    </header>
    <main>
        <?php 
            if($_SESSION['page'] === 'Home') {
                include '../frontend/views/home.php';
            }
            if($_SESSION['page'] === 'Portfolio') {
                include '../frontend/views/portfolio.php';
            }
            if($_SESSION['page'] === 'Services') {
                include '../frontend/views/services.php';
            }
            if($_SESSION['page'] === 'Contact') {
                include '../frontend/views/contact.php';
            }
        ?>
    </main>
</body>
</html>