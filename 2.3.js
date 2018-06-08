var uno=prompt('Введите число', '0'), dos=prompt('Введите число для степени', '0');

function pow(num1, num2) {
    var a=1;
    if (num1 === null || num2 === null) {
        return alert('Попробуйте заново');
    }
    else if (num1.length === 0 || num2.length === 0) {
        return alert('Попробуйте заново');
    }
    else if (+num1==0) {
        return alert('0');
    }
    else if (+num2==0) {
        return alert('1');
    }
    else if (+num1%1===0 && +num2%1===0) {
        for (var b=1; b<= +num2; b++) {
        a*=+num1;
        }
        return alert (a);
    }
    else  alert('fall');
}
pow (uno, dos);
