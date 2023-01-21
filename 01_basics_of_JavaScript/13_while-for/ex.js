// Цикл «while»

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    alert( i );
    i++;
}

// Цикл «do…while»

let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);

// Цикл «for»

for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}

// Прерывание цикла: «break»
let sum = 0;
while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Сумма: ' + sum );

// Переход к следующей итерации: continue
for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
    alert(i); // 1, затем 3, 5, 7, 9
}


// метки для break/continue

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Значение на координатах (${i},${j})`, '');
        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) break outer; // (*)
        // сделать что-нибудь со значениями...
    }
}
alert('Готово!');