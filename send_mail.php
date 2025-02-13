<?php
session_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);
    try {
        // Konfigurasi SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'aaaaajohn13@gmail.com';
        $mail->Password = 'fcgs tvzw ueka sbxx'; // Gunakan App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set email
        $mail->setFrom($email, $name);
        $mail->addAddress('ahmadalqodridalimunthe@gmail.com');
        $mail->Subject = $subject;
        $mail->Body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Kirim email
        $mail->send();
        $_SESSION['success_message'] = "Message sent successfully!";
    } catch (Exception $e) {
        $_SESSION['error_message'] = "Failed to send message. Error: {$mail->ErrorInfo}";
    }

    // Redirect kembali ke halaman utama
    header("Location: index.php");
    exit();
}
?>
