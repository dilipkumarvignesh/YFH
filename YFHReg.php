<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "YFH";


$name =  $_POST["NAME"];
$number =  $_POST["NUMBER"];
$doc =  $_POST["DOC"];
$tocf =  $_POST["TOCF"];
$toct =  $_POST["TOCT"];
$dor =  $_POST["DOR"];
$emailid =  $_POST["EMAILID"];
$MotherTongue =  $_POST["MOTHERTONGUE"];
$dob =  $_POST["DOB"];
$country =  $_POST["COUNTRY"];
$state	 =  $_POST["STATE"];
$city =  $_POST["CITY"];
$pincode =  $_POST["PINCODE"];
$address =  $_POST["ADDRESS"];
$stujob =  $_POST["STUJOB"];
$qualification =  $_POST["QUALIFICATION"];
$maritalstatus =  $_POST["MARITALSTATUS"];
$gender =  $_POST["GENDER"];
$colcom =  $_POST["COLCOM"];
$progdate =  $_POST["PROGDATE"];
$passno =  $_POST["PASSNO"];
$amtpaid =  $_POST["AMTPAID"];
$amtbal =  $_POST["AMTBAL"];
$source =  $_POST["SOURCE"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO UserRegistrations
VALUES ('".$name."', '".$number."','".$doc."',
'".$tocf."','".$toct."','".$dor."','".$emailid."','".$MotherTongue."','".$dob."',
'".$country."','".$state."','".$city."','".$pincode."','".$address."',
'".$stujob."','".$qualification."','".$maritalstatus."','".$gender."','".$colcom."',
'".$progdate."','".$passno."','".$amtpaid."','".$amtbal."', '".$source."')";

if ($conn->query($sql) === TRUE) {
    echo "Thank You for Registering. Our Volunteers will be in Touch with you soon. ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>