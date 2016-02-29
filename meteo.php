<!doctype html>

<html lang="cs">
<head>
  <meta charset="utf-8">

  <title>Meteo API</title>
  <meta name="David Podroužek" content="SitePoint">
  <link rel="stylesheet" href="css/styles.css>

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>
<?php

date_default_timezone_set("Europe/Prague");

$temp1 = $_GET['temp1'];
$temp2 = $_GET['temp2'];
$humidity = $_GET['humidity'];
$pwd = $_GET['pwd'];
$pass = "";
$hash = hash('', $pass); 

echo $pwd;
echo "<br>";
if($pwd == $hash)
{
   echo "správný hash!";
   echo "<br>";

$file = "station_data.json";
$json = json_decode(file_get_contents($file), true);

 if($temp2 != null)
 {
  $json["Temp2"][] = $temp2;
  echo $temp2;
  echo "<br>";
 }

  $json["Temp1"][] = $temp1;
  echo $temp1;
  echo "<br>";

 if($humidity != null)
 {
  $json["Humidity"][] = $humidity;
  echo $humidity;
  echo "<br>";
 }
 if($temp2 != null  && $humidity != null)
 {
  $json["Date"][] = date("d.m.y");
  $json["Hour"][] = date("H:i");
  echo json_encode($json);
  $fp = fopen('station_data.json', 'w+');
  fwrite($fp, json_encode($json));
  fclose($fp);
  echo json_last_error(); 
 }  
 }  
?>
</body>
</html>

