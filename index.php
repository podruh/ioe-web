<!doctype html>

<html lang="cs">

<head>
    <meta charset="utf-8">

    <title>NAG IoE Meteo</title>
    <meta name="David Podroužek" content="SitePoint">

    <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
    <link rel="stylesheet" href="style.css" type="text/css">
    
    <script src="/js/jquery-2.2.0.min.js"></script>
    <script src="/js/Chart.min.js"></script>
    <script src="/js/graph.js"></script>

</head>

<body>
    <header>
        <h1>NAG IoE Meteostanice</h1>    
    </header>
    <main>
        <div id="mainChart">
            <div>
            <h2>Souhrn</h2>
                <canvas id="mainChartCanvas"></canvas>
            </div>        
            <h2>Teplota 1</h2>
            <div>
                <canvas id="temp1ChartCanvas"></canvas>
            </div>
            <h2>Teplota 2</h2>
            <div>
                <canvas id="temp2ChartCanvas"></canvas>
            </div>
            <h2>Vlhkost</h2>
            <div>
                <canvas id="humidityChartCanvas"></canvas>
            </div>
        </div>                           
        <div id="chartjs-tooltip"></div>
    </main>
</body>

</html>