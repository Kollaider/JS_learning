// 1
console.log( null || 2 || undefined ); // 2

// 2
console.log('exsample 2')
console.log( console.log(1) || 2 || console.log(3) ); // 1, 2

// 3
console.log( 1 && null && 2 ); // null

// 4
console.log( console.log(1) && console.log(2) ); // 1

// 5
console.log( null || 2 && 3 || 4 ); // 3

// 6
let age;
if ( age <= 14 && age >= 90 ) {
    console.log()
}

// 7
if (-1 || 0) console.log( 'first' );            // first
if (-1 && 0) console.log( 'second' );           //
if (null || -1 && 1) console.log( 'third' );    // third
