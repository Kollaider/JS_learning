// Число
// Не будет ошибкой
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "не число" / 2 ); // NaN, такое деление является ошибкой

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "не число" / 2 - 1 ); // NaN

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// строка
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// Булевый (логический) тип
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

let isGreater = 4 > 1;
alert( isGreater ); // true (результатом сравнения будет "да")

// Значение «null»
let age = null;

// Значение «undefined»
let age1;
alert(age1); // выведет "undefined"

// Оператор typeof

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)






