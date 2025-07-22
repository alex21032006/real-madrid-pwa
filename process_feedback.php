<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    $rating = (int)$_POST['rating'];
    
    $stmt = $pdo->prepare("INSERT INTO feedback (name, email, message, rating) VALUES (?, ?, ?, ?)");
    $stmt->execute([$name, $email, $message, $rating]);
    
    header('Location: ../thank_you.html');
    exit;
}
?>