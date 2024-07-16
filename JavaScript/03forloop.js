// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// let i = 1;
// while (i <= 5) {
//   let j = 1;
//   while (j <= i) {
//     document.write("*");
//     j++;
//   }
//   i++;
//   document.write("<br>");
// }

// -----------------------------------------------------------------------------
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= 5 - i; k++) {
//     document.write("&nbsp;&nbsp;");
//   }
//   for (let j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// let i = 1;
// while (i <= 5) {
//   let k = 1;
//   while (k <= 5 - i) {
//     document.write("&nbsp;&nbsp;");
//     k++;
//   }
//   let j = 1;
//   while (j <= i) {
//     document.write("*");
//     j++;
//   }
//   i++;
//   document.write("<br>");
// }

// -----------------------------------------------------------------------------

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(i);
//   }
//   document.write("<br>");
// }

// let i = 1;
// while (i <= 5) {
//   let j = 1;
//   while (j <= i) {
//     document.write(i);
//     j++;
//   }
//   i++;
//   document.write("<br>");
// }

// -----------------------------------------------------------------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// let i = 1;
// while (i <= 5) {
//   let j = 1;
//   while (j <= i) {
//     document.write(j);
//     j++;
//   }
//   i++;
//   document.write("<br>");
// }
// -----------------------------------------------------------------------------
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let k = 1;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(k + " ");
//     k++;
//   }
//   document.write("<br>");
// }

// let i = 1;
// let k = 1;
// while (i <= 5) {
//   let j = 1;
//   while (j <= i) {
//     document.write(k + " ");
//     k++;
//     j++;
//   }
//   i++;
//   document.write("<br>");
// }