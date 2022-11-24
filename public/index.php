<?php
    include '../backend/session.php';
?>

<!DOCTYPE html>
<html lang="en">
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="keywords" content="websites,website,web development, Web Development, web developer, software, software engineer, self, self taught, developer, self taught developer, php, mysql, sql, database, utah, salt lake city, business">
    <meta name="description" content="For remarkable websites, come here!">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $_SESSION['page']; ?></title>
    <link rel="stylesheet" href="assets/stylesheets/main/index.css">
</head>
<body>
    <header class="header">
        <a href="https://github.com/RugerClaus" target="_blank" class="h-child-one">
            <img class="github" src="assets/icons/GitHub_Logo.png" alt="">
        </a>
        <h1 class="h-child-two headerText">Claussy Designs</h1>
        <form action="../backend/router.php" method="get" class="h-child-three">
            <input type="submit" id="homeButton" name="home" value="Home">
            <input type="submit" id="portfolioButton" name="portfolio" value="Portfolio">
            <input type="submit" id="servicesButton" name="services" value="Services">
            <input type="submit" id="contactButton" name="contact" value="Contact">
        </form>
        <div class="mobileNav">
            <img src="assets/icons/hamburgerButton.svg" alt="">
        </div>

    </header>
    <div class="mobileDevice">
        Please view this application on a desktop or laptop computer. Mobile version is in development.
    </div>
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
        <footer>
            
        </footer>
    <input type="hidden" id="page" value="<?php echo $_SESSION['page']; ?>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="../frontend/js/scrollFade.min.js"></script>
    <script src="../frontend/js/index.js"></script>
</body>
</html>