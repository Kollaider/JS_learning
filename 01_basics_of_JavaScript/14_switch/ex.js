let a = 2 + 2;

switch (a) {
    case 3:
        console.log( 'Маловато' );
        break;
    case 4:
        console.log( 'В точку!' );
        break;
    case 5:
        console.log( 'Перебор' );
        break;
    default:
        console.log( "Нет таких значений" );
}


// Группировка «case»
let a = 3;

switch (a) {
    case 4:
        alert('Правильно!');
        break;

    case 3: // (*) группируем оба case
    case 5:
        alert('Неправильно!');
        alert("Может вам посетить урок математики?");
        break;

    default:
        alert('Результат выглядит странновато. Честно.');
}