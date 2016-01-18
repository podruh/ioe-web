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

$temp1 = $_GET['temp1'];
$temp2 = $_GET['temp2'];
$humidity = $_GET['humidity'];

$file = "station_data.json";
$json = json_decode(file_get_contents($file), true);

 if($temp1 != null)
 {
  $json["Temp1"][] = $temp1;
 }
 if($temp2 != null)
 {
  $json["Temp2"][] = $temp2;
 }
 if($humidity != null)
 {
  $json["Humidity"][] = $humidity;
 }
 if($temp1 != null && $temp2 != null && $humidity != null)
 {
  $json["Date"][] = date("H:i:s");
  echo json_encode($json);
  $fp = fopen('station_data.json', 'w+');
  fwrite($fp, json_encode($json));
  fclose($fp);
  echo json_last_error(); 
 }    
?>
</body>
</html>

