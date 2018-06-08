var number=prompt('Просуммировать до', '0');

function sumTo(num1) {
    var a=0;
    if (num1 === null || num1.length === 0) {
        return alert('Попробуйте заново');
    }
    else if (+num1==0) {
        return alert('0');
    }
    else if (+num1%1===0) {
        for (var b=1; b<= +num1; b++) {
        a+=b;
        }
        return alert (a);
    }
    else  alert('fail');
}
sumTo(number);
