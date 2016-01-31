  var dataObject = $.getJSON("station_data.json", function(_json) {
      var obj = JSON.stringify(_json, null, "\t");
  });

 function sortDataByDate(date, data)
 {
 
      var dates = new Array();
      var hours = new Array();
      var temp1 = new Array();
      var temp2 = new Array();
      var humidity = new Array();
      var sortedData = {dates,hours,temp1,temp2,humidity};
      for(i = 0; i < data.Date.length;i++)
      {
        if(date == data.Date[i])
        {
          dates.push(data.Date[i]);
          hours.push(data.Hour[i]);
          temp1.push(data.Temp1[i]);
          temp2.push(data.Temp2[i]);
          humidity.push(data.Humidity[i]);
        }
      }
      return sortedData;
 }

  dataObject.complete(function(data) {
      window.chartData = JSON.parse(JSON.stringify(data["responseJSON"], null, "\t"), true);
      var lastDate = chartData.Date[chartData.Date.length - 1];
      var sortedData = sortDataByDate(lastDate, chartData);       
      
      var last;
      var drop = document.getElementById("dateSelect");
      for (i = chartData.Date.length -1 ; i > -1; i--)
      {
        if(last != chartData.Date[i])
        {
          last = chartData.Date[i];
          var option = new Option(last,drop.options.length);
          drop.options.add(option);
        }                      
      }

      Chart.defaults.global.pointHitDetectionRadius = 1;
      Chart.defaults.global.customTooltips = function(tooltip) {
          var tooltipEl = $('#chartjs-tooltip');
          if (!tooltip) {
              tooltipEl.css({
                  opacity: 0
              });
              return;
          }
          tooltipEl.removeClass('above below');
          tooltipEl.addClass(tooltip.yAlign);
          var innerHtml = '';
          for (var i = tooltip.labels.length - 1; i >= 0; i--) {
              innerHtml += [
                  '<div class="chartjs-tooltip-section">',
                  '	<span class="chartjs-tooltip-key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>',
                  '	<span class="chartjs-tooltip-value">' + tooltip.labels[i] + '</span>',
                  '</div>'
              ].join('');
          }
          tooltipEl.html(innerHtml);
          tooltipEl.css({
              opacity: 1,
              left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
              top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
              fontFamily: tooltip.fontFamily,
              fontSize: tooltip.fontSize,
              fontStyle: tooltip.fontStyle,
          });
      };

      window.mainChartData = {

          labels: sortedData.hours,
          datasets: [{
              label: "BH1750 teploměr",
              fillColor: "rgba(253, 0, 6,0.2)",
              strokeColor: "rgba(253, 0, 6,1)",
              pointColor: "rgba(253, 0, 6,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: sortedData.temp1
          }, {
              label: "DHT11 teploměr",
              fillColor: "rgba(255, 113, 0,0.2)",
              strokeColor: "rgba(255, 113, 0,1)",
              pointColor: "rgba(255, 113, 0,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: sortedData.temp2
          }, {
              label: "DHT11 vlhkoměr",
              fillColor: "rgba(209, 0, 123,0.2)",
              strokeColor: "rgba(209, 0, 123,1)",
              pointColor: "rgba(209, 0, 123,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: sortedData.humidity
          }]
      }
      
      window.temp1Data = new Object();                    
      temp1Data.labels = mainChartData.labels;  
      temp1Data.datasets = new Array(mainChartData.datasets[0]);           
      
      window.temp2Data = new Object();                      
      temp2Data.labels = mainChartData.labels;
      temp2Data.datasets = new Array(mainChartData.datasets[1]);
      
      window.humiData = new Object();                      
      humiData.labels = mainChartData.labels;
      humiData.datasets = new Array(mainChartData.datasets[2]);
      
      window.mainOptions ={
          responsive: true,
          pointDot : false,
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
          pointHitDetectionRadius : 2
          };
      window.temp1Options =  {
          responsive: true,
          pointDot : false,
          scaleShowLabels: false, 
          pointHitDetectionRadius : 7        
      };
      window.temp2Options ={
          responsive: true,
          pointDot : false,
          scaleShowLabels: false,
          pointHitDetectionRadius : 7          
      }; 
      window.humidityOptions =  {
          responsive: true,       
          pointDot : false,
          scaleShowLabels: false,
          pointHitDetectionRadius : 7        
      };
      
      var ctx = document.getElementById("mainChartCanvas").getContext("2d");      
          
      window.myLine1 = new Chart(ctx).Line(mainChartData,mainOptions);
                            
      var ctx1 = document.getElementById("temp1ChartCanvas").getContext("2d");
      window.myLine2 = new Chart(ctx1).Line(temp1Data,temp1Options);
      
      var ctx2 = document.getElementById("temp2ChartCanvas").getContext("2d");
      window.myLine3 = new Chart(ctx2).Line(temp2Data,temp2Options );
      
      var ctx3 = document.getElementById("humidityChartCanvas").getContext("2d");
      window.myLine4 = new Chart(ctx3).Line(humiData,humidityOptions);
  });
function ChangeDate()
{
  var drop = document.getElementById("dateSelect");
  var date = drop.options[drop.selectedIndex].text;
  var dataSorted = sortDataByDate(date, chartData);
  for(i = 0; i < myLine1.datasets[0].points.length;i++)
  {
    myLine1.datasets[0].points[i].value = dataSorted.temp1[i];
    myLine1.datasets[0].points[i].label = dataSorted.hours[i];
    myLine1.datasets[1].points[i].value = dataSorted.temp2[i];
    myLine1.datasets[1].points[i].label = dataSorted.hours[i];
    myLine1.datasets[2].points[i].value = dataSorted.humidity[i];
    myLine1.datasets[2].points[i].label = dataSorted.hours[i];
  }
  if(myLine1.datasets[0].points.length < dataSorted.hours.length)
  {
    for (j = myLine1.datasets[0].points.length; j < dataSorted.hours.length; j++ )
    {
      var values = [dataSorted.temp1[j],dataSorted.temp2[j],dataSorted.humidity[j]];
      myLine1.addData(values, dataSorted.hours[j]);
    }
  }
  else if(myLine1.datasets[0].points.length > dataSorted.hours.length)
  {
    mainChartData.labels = dataSorted.hours;
    temp1Data.labels = dataSorted.hours;
    temp2Data.labels = dataSorted.hours;
    humiData.labels = dataSorted.hours;
    mainChartData.datasets[0].data = dataSorted.temp1;
    mainChartData.datasets[1].data = dataSorted.temp2;
    mainChartData.datasets[2].data = dataSorted.humidity;
    temp1Data.datasets[0].data = dataSorted.temp1;
    temp2Data.datasets[0].data = dataSorted.temp2;
    humiData.datasets[0].data = dataSorted.humidity;
    myLine1.destroy();
    var ctx = document.getElementById("mainChartCanvas").getContext("2d");
    myLine1 = new Chart(ctx).Line(mainChartData,mainOptions);
  }
  myLine1.update();


}