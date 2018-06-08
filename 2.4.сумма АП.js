var number=prompt('Просуммировать до', '0');

function arSum(num1) {
    if (num1 === null || num1.length === 0) {
        return 'Попробуйте заново';
    }
    else if (+num1==0) {
        return '0';
    }
    else if (+num1%1===0) {
            return +num1*(+num1+1)/2;
        
    }
    else  return 'fail';
}
alert (arSum(number));
