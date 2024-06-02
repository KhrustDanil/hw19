      let n = 0;
      let i, j;

      while (isNaN(n) || n < 1) {
          n = +prompt("Введіть довжину масиву");
      }

      let arr = [];

      let topRightElem = +prompt("Введіть номер кутового елементу квадрата верхньої правої частини", Math.round(n / 2));
      let rowNumber = +prompt("Введіть номер рядка для підрахунку суми", Math.round(n / 2));
      let columnNumber = +prompt("Введіть номер стовпця для підрахунку суми", Math.round(n / 2));

      for (i = 0; i < n; i++) {
          arr[i] = [];
          for (j = 0; j < n; j++) {
              if (i === 0 && j === n - 1) {
                  arr[i][j] = topRightElem;
              } else {
                  arr[i][j] = Math.round(Math.random() * 9);
              }
          }
      }

      function drawMatrix(matrixMark = []) {
          document.write("<div id='matrix'>");
          for (i = 0; i < n; i++) {
              for (j = 0; j < n; j++) {
                  let cellClass = 'matrix';
                  if (matrixMark.some(cell => cell[0] === i && cell[1] === j)) {
                      cellClass += ' marker';
                  }
                  document.write(`<span class='${cellClass}' id='cell-${i}-${j}'>${arr[i][j]}</span>`);
              }
              document.write("<br />");
          }
          document.write("</div><br />");
      }
      drawMatrix();

      // Сума головної діагоналі
      let sum = 0;
      let marker = [];
      for (i = 0; i < n; i++) {
          sum += arr[i][i];
          marker.push([i, i]);
      }
      document.write("Сума головної діагоналі = " + sum + "<br />");
      drawMatrix(marker);

      // Сума побічної діагоналі
      let sum2 = 0;
      let marker2 = [];
      for (i = 0; i < n; i++) {
          sum2 += arr[i][n - i - 1];
          marker2.push([i, n - i - 1]);
      }
      document.write("Сума побічної діагоналі = " + sum2 + "<br />");
      drawMatrix(marker2);

      // Сума половини матриці без головної діагоналі зверху справа
      let sum3 = 0;
      let marker3 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i < j) {
                sum3 += arr[i][j];
                marker3.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці без головної діагоналі зверху справа = " + sum3 + "<br />");
      drawMatrix(marker3);

      // Сума половини матриці з головною діагоналлю зверху справа
      let sum4 = 0;
      let marker4 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i <= j) {
                sum4 += arr[i][j];
                  marker4.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці з головною діагоналлю зверху справа = " + sum4 + "<br />");
      drawMatrix(marker4);

      // Сума половини матриці без головної діагоналі знизу зліва
      let sum5 = 0;
      let marker5 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i + j > n - 1) {
                  sum5 += arr[i][j];
                  marker5.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці без головної діагоналі знизу зліва = " + sum5 + "<br />");
      drawMatrix(marker5);

      // Сума половини матриці з головною діагоналлю знизу зліва
      let sum6 = 0;
      let marker6 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i >= j) {
                  sum6 += arr[i][j];
                  marker6.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці з головною діагоналлю знизу зліва = " + sum6 + "<br />");
      drawMatrix(marker6);

      // Сума половини матриці без побічної діагоналі зверху зліва
      let sum7 = 0;
      let marker7 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i + j < n - 1) {
                  sum7 += arr[i][j];
                  marker7.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці без побічної діагоналі зверху зліва = " + sum7 + "<br />");
      drawMatrix(marker7);

      // Сума половини матриці з побічною діагоналлю зверху зліва
      let sum8 = 0;
      let marker8 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i + j <= n - 1) {
                  sum8 += arr[i][j];
                  marker8.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці з побічною діагоналлю зверху зліва = " + sum8 + "<br />");
      drawMatrix(marker8);

      // Сума половини матриці без побічної діагоналі внизу справа
      let sum9 = 0;
      let marker9 = [];
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (i + j > n - 1) {
                  sum9 += arr[i][j];
                  marker9.push([i, j]);
              }
          }
      }
      document.write("Сума половини матриці без побічної діагоналі внизу справа = " + sum9 + "<br />");
      drawMatrix(marker9);

      // Сума обраного рядка
      let sumRow = 0;
      let markerRow = [];
      for (j = 0; j < n; j++) {
          sumRow += arr[rowNumber - 1][j];
          markerRow.push([rowNumber - 1, j]);
      }
      document.write("Сума рядка " + rowNumber + " = " + sumRow + "<br />");
      drawMatrix(markerRow);

      // Сума обраного стовпця
      let sumColumn = 0;
      let markerColumn = [];
      for (i = 0; i < n; i++) {
          sumColumn += arr[i][columnNumber - 1];
          markerColumn.push([i, columnNumber - 1]);
      }
      document.write("Сума стовпця " + columnNumber + " = " + sumColumn + "<br />");
      drawMatrix(markerColumn);


