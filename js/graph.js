  var dataObject = $.getJSON("station_data.json", function(_json) {
      var obj = JSON.stringify(_json, null, "\t");
  });

  dataObject.complete(function(data) {
      chartData = JSON.parse(JSON.stringify(data["responseJSON"], null, "\t"), true);

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

      var mainChartData = {

          labels: chartData.Date,
          datasets: [{
              label: "Teploměr 1",
              fillColor: "rgba(253, 0, 6,0.2)",
              strokeColor: "rgba(253, 0, 6,1)",
              pointColor: "rgba(253, 0, 6,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: chartData.Temp1
          }, {
              label: "Teploměr 2",
              fillColor: "rgba(255, 113, 0,0.2)",
              strokeColor: "rgba(255, 113, 0,1)",
              pointColor: "rgba(255, 113, 0,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: chartData.Temp2
          }, {
              label: "Vhkoměr",
              fillColor: "rgba(209, 0, 123,0.2)",
              strokeColor: "rgba(209, 0, 123,1)",
              pointColor: "rgba(209, 0, 123,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: chartData.Humidity
          }]
      }
      console.log(mainChartData);
      
      var temp1Data = new Object();                    
      temp1Data.labels = mainChartData.labels;  
      temp1Data.datasets = new Array(mainChartData.datasets[0]);           
      
      var temp2Data = new Object();                      
      temp2Data.labels = mainChartData.labels;
      temp2Data.datasets = new Array(mainChartData.datasets[1]);
      
      var humiData = new Object();                      
      humiData.labels = mainChartData.labels;
      humiData.datasets = new Array(mainChartData.datasets[2]);
      
      var ctx = document.getElementById("mainChartCanvas").getContext("2d");
      window.myLine = new Chart(ctx).Line(mainChartData, {
          responsive: true,
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
      })
                      
      var ctx1 = document.getElementById("temp1ChartCanvas").getContext("2d");
      window.myLine = new Chart(ctx1).Line(temp1Data, {
          responsive: true,
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
      })
      
      var ctx2 = document.getElementById("temp2ChartCanvas").getContext("2d");
      window.myLine = new Chart(ctx2).Line(temp2Data, {
          responsive: true,
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
      })
      
      var ctx3 = document.getElementById("humidityChartCanvas").getContext("2d");
      window.myLine = new Chart(ctx3).Line(humiData, {
          responsive: true,                    
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
      })
      
  });