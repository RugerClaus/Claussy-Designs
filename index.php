
<?php 

	$anythingIwantBecauseThisIsMyWebsite = $_SERVER['REQUEST_URI'];

	switch ($anythingIwantBecauseThisIsMyWebsite) {
	
		case '':
		case '/':
				require __DIR__ . '/views/welcome.php';
				break;

		case '/home':
				require __DIR__ . '/views/home.php';
				break;

		case '/projects':
				require __DIR__ . '/views/projects.php';
				break;

		case '/websites':
				require __DIR__ . '/views/websites.php';
				break;
		case '/templates':
				require __DIR__ . '/views/templates.php';
				break;
		case '/contact':
				require __DIR__ . '/views/contact.php';
				break;

		default:
				http_response_code(404);
				require __DIR__ . '/views/404.php';
				break;
	}
?>