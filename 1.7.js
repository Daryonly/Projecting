var log=prompt ('Введите логин', '');
if (log=='director') {
    var pass=prompt ('Введите пароль', '');
if (pass=='admin321') {
    alert ('Загрузка страницы');
}else if (pass==null) {
    alert ('Отмена');

}else {
    alert ('Неверный пароль');
}
}else if (log==null) {
    alert ('Отмена');
}
else {
    alert('Попробуйте в следующий раз');
}
