// var jogador1 = 1;
// var jogador2 = 0;
// var placar;

// // If ternario
// jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos"):console.log('Jogadores Invalidos');

// // usando if
//     if (jogador1 > 0 && jogador2 == 0){
//         console.log('Jogador 1 marcou ponto!');
//         placar = jogador1 > jogador2;
//     } 
// // Usando else if
// else if (jogador2 > 0 && jogador1 == 0){
//         console.log('Jogador 2 marcou ponto!');
//         placar = jogador2 > jogador1;
//     } 
// // usando else
//     else {
//         console.log('Ninguém marcou ponto.');
//     }

//     switch(placar){
//         case placar = jogador1 > jogador2:
//             console.log('Jogador 1 ganhou');
//             break;
//             case placar = jogador2 > jogador1:
//                 console.log('Jogador 2 ganhou');
//                 break;
//                 default:
//                     console.log('Ninguém ganhou')
//     }


// for([expressaoInicial]; [condicao];[incremento]){
//     declaracao
// }

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

//for - executa uma instrução até que ela seja falsa

// for (let indice = 0; indice < array.length; indice++){
//     console.log(indice)
// }

// for/in
// for (let i in array){
//     console.log(i)
// }

// com object
// for (i in object){
//     console.log(i)
// }

// for/of - executa repetição a partir de valor com array
// for (i of array){
//     console.log(i)
// }

// //com object
// for (i of object.propriedade1){
//     console.log(i)
// }

var a = 0;

// while (a < 10 ){
//     a++;
//     console.log(a);
// }

do {
    a++;
    console.log(a);
} while (a < 10);