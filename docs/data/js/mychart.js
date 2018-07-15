// 2) CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [], tmpData1 = [], tmpData2 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
  };

  // 4)chart.jsで描画
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tmpLabels,
      datasets: [
        { type: 'line', label: "有効求人倍率", fill: false, data: tmpData2, backgroundColor: "blue", pointBorderColor: "blue", borderColor: "blue" },
      ]
    }
  });

  var ctx2 = document.getElementById("myChart2").getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: tmpLabels,
      datasets: [
        { label: "完全失業率", data: tmpData1, backgroundColor: "red" }
      ]
    }
  });

}

function main() {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = 'https://linkevery2s.github.io/openjapan/data/csv/keizai.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
  }
  req.send(null);
}

main();