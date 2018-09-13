<?php

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        file_put_contents("mails.txt", $email . PHP_EOL, FILE_APPEND);
    }
}

if ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {

} else {
    header('Location: /#confirmation');
}