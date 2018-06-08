var number;
do {
    number=prompt('Введите число больше 100', '');
    if (isNaN (+number)) {
        alert('Попробуйте еще раз');
        break;
    }
}
while ((+number<=100) && (!(number===null)) );
