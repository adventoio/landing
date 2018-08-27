<?php

if(isset($_POST['email']))
{
	$email = $_POST['email'];
	if(strlen($email)>6)
	{
		$fp = fopen("mails.txt", "a");
		fwrite($fp, $email);
		fwrite($fp, "\n");
		fclose($fp); 
	}
}

header('Location: /');

?>