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
 if($temp1 == null)
 {
  $temp1 = 0;
 }
 if($temp2 == null)
 {
  $temp2 = 0;
 }
 if($humidity == null)
 {
  $humidity = 0;
 }

$file = "station_data.json";
$json = json_decode(file_get_contents($file), true);
echo json_encode($json);


 /*
$var = array(
              Date => date("Y-m-d"),
              Time => date("H:i:s"),
              Temp1 => $temp1,
              Temp2 => $temp2,
              Humidity => $humidity
          );
  $json[] = $var;
*/


$json["Date"][] = date("H:i:s");
$json["Temp1"][] = $temp1;
$json["Temp2"][] = $temp2;
$json["Humidity"][] = $humidity; 

  echo json_encode($json);
  $fp = fopen('station_data.json', 'w+');
  fwrite($fp, json_encode($json));
  fclose($fp);
  echo json_last_error();      

?>
</body>
</html>

