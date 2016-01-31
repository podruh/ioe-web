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
			<h1>
				NAG IoE Meteostanice
			</h1>
		</header>
		<main>
			<div id="content">
      
				<div id="mainChart">        
					<div>
					<h2>Souhrn</h2>
             <div id="range">
                <select id="dateSelect">
                    <option>Datum</option>
                </select>
             </div>
						<canvas id="mainChartCanvas"></canvas>
            <div id="chartjs-tooltip"></div>
					</div>
				</div>
				<hr>
				<div id="singleCharts">
					<div class="smallChart">
						<h2>1-wire teploměr</h2>
						<canvas id="temp1ChartCanvas"></canvas>
					</div>
					<div class="smallChart">
						<h2>DHT11 teplota</h2>
						<canvas id="temp2ChartCanvas"></canvas>
					</div>
					<div class ="smallChart">
						<h2>DHT11 vlhkost</h2>
						<canvas id="humidityChartCanvas"></canvas>
					</div>
				</div>		
			</div>
			
		</main>
	</body>
</html>
