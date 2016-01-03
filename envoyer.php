<?php

$to      = 'retterblond@yahoo.es';
$subject = 'contact esad';
$message = $_POST['message'];
//$message = 'nom: '.$nom.', mail: '.$mail.' site: '.$site.' message: '.$textarea;
$headers = 'From: contact@esad.fr' . "\r\n" .
    'Reply-To: retterblond@yahoo.es' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo "ok";
