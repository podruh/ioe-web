<!doctype html>
<html lang="cs">
	<head>
		<meta charset="utf-8">
		<title>py_flavor Meteostanice</title>
		<meta name="David Podroužek" content="Údaje posílané z několika senzorů na našem RaspberryPi">
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
				py_flavor Meteostanice
			</h1>
		</header>
		<main>    
				<div id="mainChart">        
					<div>
					<h2>Souhrn</h2>
             <form>
                <select id="dateSelect" onchange="ChangeDate()">
              
                </select>
              </form>
						<canvas id="mainChartCanvas"></canvas>
            <div id="chartjs-tooltip"></div>
					</div>
				</div>
				<hr>
				<div id="singleCharts">
					<div class="smallChart">
						<h2>BH1750 teploměr</h2>
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
		</main>
	</body>
</html>
