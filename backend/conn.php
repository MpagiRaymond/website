<?php
// headers("Allow-Content-*");

$dbserver = "localhost";
$dbuser = "root";
$dbpwd = "";
$dbname = "votes";

$conn = new mysqli($dbserver, $dbuser, $dbpwd, $dbname);

if($conn->connect_error){
    die("Error".$conn->connect_error);
}
?>