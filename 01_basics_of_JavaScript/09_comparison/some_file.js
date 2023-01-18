// Результат сравнения имеет логический тип

console.log( 2 > 1 );  // true (верно)
console.log( 2 == 1 ); // false (неверно)
console.log( 2 != 1 ); // true (верно)

// Сравнение строк
alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

// Сравнение разных типов

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1

alert( true == 1 ); // true
alert( false == 0 ); // true


// Строгое сравнение
alert( 0 === false ); // false, так как сравниваются разные типы

// Сравнение с null и undefined
alert( null === undefined ); // false
alert( null == undefined ); // true