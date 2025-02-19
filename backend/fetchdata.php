<?php
header("Access-control-Allow-Origin:*");
header("Content-Type:application/json");

require "conn.php";

$data = array();

$sql = "SELECT * FROM details";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0) {
    while($rows = $result -> fetch_assoc()){
        $data[] = $rows;
        // print_r($data);
    }
}else{
    echo "0 results";
}

echo json_encode($data);
?>