 /*Dados três valores A, B e C, construa um algoritmo em PORTUGOL, que imprima os
valores de forma descendente (do maior para o menor).*/


// var a = parseInt(prompt("Digite o valor a: "))
// var b = parseInt(prompt("Digite o valor b: "))
// var c = parseInt(prompt("Digite o valor c: "))

let a = 2
let b = 1
let c = 3

if (a > b && a > c) {
    console.log(a)
    if (b > c) {
        console.log("ABC")
        console.log(b)
        console.log(c)
        
    } else {
        console.log("ACB")
        console.log(c)
        console.log(b)
    }
} else if(c > b) {
    console.log(c)
    if (b > a) {
        console.log("CBA")
        console.log(b)
        console.log(a)
    } else {
        console.log("CAB")
        console.log(a)
        console.log(b)
    }
} else {
    console.log(b)
    if (a > c) {
        console.log("BAC")
        console.log(a)
        console.log(c)
    } else {
        console.log("BCA")
        console.log(c)
        console.log(a)
    }
}
