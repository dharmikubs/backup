// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    document.write(" * ");
  }
  document.write("</br>");
}

//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
let k1;
for (let i = 0; i <= 5; i++) {
  for (let k1 = 1; k1 <= 5 - i; k1++) {
    document.write(" &nbsp;&nbsp; ");
  }
  for (let j = 0; j <= i; j++) {
    document.write(" * ");
  }
  document.write("</br>");
}

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    document.write(" * ");
  }
  document.write("</br>");
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let k = 1;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    document.write(" " + k + " ");
    k++;
  }
  document.write("</br>");
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br>");
}
