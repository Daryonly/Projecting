function Calculator() {
    this.read = function () {
        this.a = +prompt('Первое число=', 0);
        this.b = +prompt('Второе число', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mult = function () {
        return this.a + this.b;
    };
}   
var calculator = new Calculator();

calculator.read();
if (((checkInp(calculator.a)&&checkInp(calculator.b)) )==false)
{alert ('ошибка');}
else {
    alert('Сумма=' + calculator.sum());
    alert('Произведение=' + calculator.mult());
}
function checkInp(elem) {
    return !(isNaN(+elem)||elem === '' || elem === null);
}
