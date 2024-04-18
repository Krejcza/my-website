<?php

    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: https://www.modelparkpodhradem.cz/index.php?success=-1#form");
        exit;
    }

    // Nastavení emailu - odeslání
    $recipient = "modelarinemcice@seznam.cz";

    // Předmět emailu
    $subject = "Máte novou zprávu od: $name";

    // Obsah emailu, který se odešle
    $email_content = "Jméno: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Zpráva:\n$message\n";

    // Emailová hlavička
    $email_headers = "From: $name <$email>";

    // Odeslání emailu 
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Přesměrování na stránku, pokud bylo vše OK
    header("Location:https://www.modelparkpodhradem.cz/index.php?success=1#form");

?>
