
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" description="Claussy Designs - A web developer" content="width=device-width, initial-scale=1.0">
    <title>Claussy Designs - a web dev</title>
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <script src="../index.js" type="module" defer></script>
</head>
<body>
    <header>
        <h1>Claussy Designs</h1>
        <nav></nav>
        <img class="navigation" src="../images/hamburgerButton.svg" alt="hamburger button">
    </header>
    <main>
        <div>
            <h2>Contact</h2>
        </div>

        <form action="../mail.php" id="contactForm" method="post">
            <input name="name" class="formInput" type="text" placeholder="Name">
            <input name="email" class="formInput" type="text" placeholder="Email">
            <input name="subject" class="formInput" type="text" placeholder="Subject">
            <textarea name="message" class="formInput" placeholder="Message" cols="30" rows="10"></textarea>
            <input id="submitButton" type="submit">
        </form>
    </main>
    <footer>
        <p class="footer">Footer</p>
    </footer>
</body>
</html>