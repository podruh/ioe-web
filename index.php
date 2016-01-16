<!doctype html>

<html lang="cs">

<head>
    <meta charset="utf-8">

    <title>NAG IoE Meteo</title>
    <meta name="David Podroužek" content="SitePoint">

    <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

    <script src="/js/jquery-2.2.0.min.js"></script>
    <script src="/js/Chart.min.js"></script>
    <script src="/js/test.js"></script>
    <script src="/js/graph.js"></script>
    <style>
        header,main{
            width:100%;
        }
        
        header {
            height:10%;
            
        }
        
        main{
          
        }
        
        h1 {
            text-align:center;
            
        }
        
        #chart {
            width: 60%;
            margin: 20px auto;
        }
        
        #canvas {
            height: 450px;
            width: 600px;
        }
        
        #chartjs-tooltip {
            opacity: 1;
            position: absolute;
            left:-15px;
            background: rgba(0, 0, 0, .7);
            color: white;
            padding: 3px;
            border-radius: 3px;
            -webkit-transition: all .1s ease;
            transition: all .1s ease;
            pointer-events: none;
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
        }
        
        .chartjs-tooltip-key {
            display: inline-block;
            width: 20px;
            height: 20px;
        }
        
    </style>

</head>

<body>
    <header>
        <h1>NAG IoE Meteostanice</h1>    
    </header>
    <main>
        <div id="chart">
            <div>
                <canvas id="canvas"></canvas>
            </div>
        </div>
        <div id="chartjs-tooltip"></div>
    </main>
</body>

</html>