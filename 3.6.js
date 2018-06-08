var mass = new Array(99).fill (true,2);

var j=2;
do {
    for (var a = 2 * j; a < 100; a += j) {
        mass[a] = false;
    }

    for (a = j + 1; a < 100; a++) {
        if (mass[a]) break;
    }
    j = a;
}
while (j*j<100); 
var sum =0;
for (a=0; a< mass.lengh; a++) {
    if (mass[a]) {
        sum += 1;
    }
}
alert (sum);
