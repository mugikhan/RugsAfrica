<?php
    $userName = $_POST["userName"];
    $userSubject = $_POST["userSubject"];
    $userEmail = $_POST["userEmail"];

    $userMessage = nl2br("$userName \r\n" . $_POST["userMessage"]);
    $userMessage = wordwrap($userMessage,70);

    $headers = "From: " . strip_tags($_POST["userEmail"]) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $to = "mugikhan@gmail.com";

    /*Recaptcha code from http://makingspidersense.com/tutorials/tut-recaptcha.txt */
    function post_captcha($user_response) {
            $fields_string = '';
            $fields = array(
                'secret' => '6Ld_U08UAAAAAJcgc5gughPwOirVhuIpRnZBeL5C',
                'response' => $user_response
            );
            foreach($fields as $key=>$value)
            $fields_string .= $key . '=' . $value . '&';
            $fields_string = rtrim($fields_string, '&');

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
            curl_setopt($ch, CURLOPT_POST, count($fields));
            curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

            $result = curl_exec($ch);
            curl_close($ch);

            return json_decode($result, true);
        }

        // Call the function post_captcha
        $res = post_captcha($_POST['g-recaptcha-response']);
        if (!$res['success']) {
            // What happens when the CAPTCHA wasn't checked
            echo '<h2>Please go back and make sure you check the security CAPTCHA box.</h2><br>';
        }
        else {
            // If CAPTCHA is successfully completed...
            mail($to, $userSubject, $userMessage, $headers);
            header("Location: thankYou.html");
        }
?>





