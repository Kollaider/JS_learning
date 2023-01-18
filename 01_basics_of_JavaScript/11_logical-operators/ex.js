// || (ИЛИ)
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// && (И)
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// ! (НЕ)
alert( !true ); // false
alert( !0 ); // true

// двойное НЕ !! используют для преобразования значений к логическому типу:
alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false