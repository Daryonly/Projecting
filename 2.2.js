var uno=prompt('Введние число', '0'), dos=prompt('Введите второе число', '0');

function min(num1, num2) {
    if (num1 === null || num2 === null) {
        return alert('Попробуйте заново');
    }
    else if (num1.length === 0 || num2.length === 0) {
        return alert('Попробуйте заново');
    }
    else if (+num1 == +num2) {
        return alert('Числа одинаковые');
    }
    else {
        return alert(+num2);
    }
}
