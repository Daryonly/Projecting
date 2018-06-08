var massage;
var login=prompt('Введите свой логин', '');
(login == 'Вася') ? message= 'Привет' :
    (login == 'Директор') ? message= 'Здравствуйте' :
        (login == '') ? message= 'Нет логина' : message='';
alert (message);
