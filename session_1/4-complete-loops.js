//print Hello! 10 times
var i = 0;
var j = 0;
for (i = 0; i < 10; i++) {
    console.log("Hello!");
}
var arrayexp = ["Abby", "Bob", "Catherine", "Derek", "Eric", "Felicia"];
for (j = 0; j < arrayexp.length; i++) {
    console.log(arrayexp[j]);
}
j = 0;
while (j < arrayexp.length) {
    console.log(arrayexp[j]);
    j++;
}
j = 0;
do {
    console.log(arrayexp[j]);
} while (j < arrayexp.length);
// show difference
var a = 1;
while (a > 1) {
    console.log("DO IT ONCE");
}
do {
    console.log("DO IT ONCE");
} while (a > 1);
