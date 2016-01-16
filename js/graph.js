  var dataObject = $.getJSON("station_data.json", function(_json) {
      var obj = JSON.stringify(_json, null, "\t");
  });

  dataObject.complete(function(data) {
      chartData = JSON.parse(JSON.stringify(data["responseJSON"], null, "\t"), true);
      console.log(chartData["Date"]);

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

      var lineChartData = {

          labels: chartData["Date"],
          datasets: [{
              label: "Teploměr 1",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: chartData["Temp1"]
          }, {
              label: "Teploměr 2",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: chartData["Temp2"]
          }, {
              label: "Vhkoměr",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: chartData["Humidity"]
          }]
      }
      var ctx = document.getElementById("canvas").getContext("2d");
      window.myLine = new Chart(ctx).Line(lineChartData, {
          responsive: true,
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
      })
  });