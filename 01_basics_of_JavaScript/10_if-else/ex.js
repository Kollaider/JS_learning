// Блок «if»
// простая конструкция
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year == 2015) alert( 'Вы правы!' );

// с блоком
if (year == 2015) {
    alert( "Правильно!" );
    alert( "Вы такой умный!" );
}

// Блок «else»
if (year == 2015) {
    console.log("It's true")
} else {
    console.log("It's wrong")
}

// Несколько условий: «else if»
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
    alert( 'Это слишком рано...' );
} else if (year > 2015) {
    alert( 'Это поздновато' );
} else {
    alert( 'Верно!' );
}

// Условный оператор „?“:    let result = условие ? значение1 : значение2;
let accessAllowed = (age > 18) ? true : false;


