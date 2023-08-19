// let array = ['string', 1, true];
// console.log(array[0])

// Guardando vários tipos de dados
let array = ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
// console.log(array);

// foreach
// array.forEach(function(item,index){console.log(item, index)})

//Push
// array.push('novo item');
// console.log(array);

// Pop
// array.pop();
// console.log(array);

//Shift
// array.shift();
// console.log(array);

//Unshift
// array.unshift('novo item no inicio');
// console.log(array)

//Indexof
// console.log(array.indexOf('string'))

// splice
// array.splice(0, 3);
// console.log(array)

//Slice
// let novoArray = array.slice(0, 3);
// console.log(novoArray)

let object = { string: 'string', number: 1, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'Objeto Interno'}};

// console.log(object.Boolean);

// var string = object.string;
// console.log(string)

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);