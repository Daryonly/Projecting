var number=prompt('Число Фибоначчи', '0');
function fib(num1){
    var n1=1, n2=2, n3;
    if (num1===null || num1.length==0) {
        return 'Попробуйте заново';
    }
    else if (+num1%1===0) {
        if (+num1<=2) {return 1}
        else {
            for (var a=3; a<=num1; a++) {
                n3=n1+n2;
                n1=n2;
                n2=n3;
            }
            return n2;
        }

    }
    else return 'fail';
}
alert (fib(number));
