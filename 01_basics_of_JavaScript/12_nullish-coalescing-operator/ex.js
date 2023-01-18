// Оператор нулевого слияния (??)

result = a ?? b;

result = (a !== null && a !== undefined) ? a : b; // аналог

// примеры
let user;
alert(user ?? "Аноним"); // Аноним (user не существует)

let user = "Иван";
alert(user ?? "Аноним"); // Иван (user существует)

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

// или
let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
// показывает первое истинное значение:
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

/*
|| возвращает первое истинное значение.
?? возвращает первое определённое значение.
 */

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

// Приоритет у || и у ?? РАВНЫЙ
let height = null;
let width = null;
// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

// Использование ?? вместе с && или ||
let x = 1 && 2 ?? 3; // Синтаксическая ошибка

let x = (1 && 2) ?? 3; // Работает без ошибок
alert(x); // 2
