var calculator = {
    sum: function () {
        return this.a + this.b;
    },
    mult: function () {
        this.a = +prompt('Первое число', 0);
        this.b = +prompt('Второе число', 0);
    }
}

calculator.read(); 
if (((checkInp(calculator.a) &&checkInp(calculator.b)) )==false) 
{   alert ('Ошибка');}
else {
    alert (calculator.sum());
    alert (calculator.mult());
};

function checkInp(elem) {
    return ! (isNaN(+elem)|| elem === '' || elem === null);
}
