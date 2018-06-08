var age=prompt('Сколько вам полных лет?', '');
if (!(+age >= 14 && +age <=90) === true) {
    alert ('Вход запрещен');
}
else {
    alert ('Вход разрешен');
}
