let userName = 'Vasya'

function showMessage () {
    userName = 'Igor'
    console.log(`${userName}`)
}
console.log(userName)
showMessage();

// параметры

function showMessage2(from, text) {
    console.log(from + ': ' + text)
}

showMessage2('Anya', 'Hello!')
showMessage2('Anya', 'How are you?!')


// Значения по умолчанию

function showMeessage3(from, text = 'text not exist') {
    console.log(from + ': ' + text)
}
showMeessage3('Anya')

// Альтернативные параметры по умолчанию
function showMeessage4(from, text) {
    if ( text === undefined ) {
        text = 'text not exist';
    }
    console.log(from + ': ' + text)
}
showMeessage4('Anya')

// возврат значения
function sum(a, b) {
    return a + b;
}
let result = sum(2, 3);
console.log(result)