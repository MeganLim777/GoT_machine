<?php
echo "Hello world!!!!!!!!!!!";
readfile("index.html");

if(isset($_POST['base64Text']))
{
    alert("hello from php");

    $uid = $_POST['base64Text'];

    echo $uid;
}

?>
