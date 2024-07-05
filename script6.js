// Fazer um código que conte de 1 até 100, sendo que sempre que um número
// for múltiplo de 03, deve retornar "Mar"
// for múltiplo de 04, deve retornar "Minino"
// for múltiplo de 03 e 04, deve retornar "MarMinino"

var num = 10;

for (let index = 1; index <= 20; index++) {
    if (index % 3 == 0 && index % 4 == 0) {
        console.log("marminino")
    } else if (index % 3 == 0) {
        console.log("mar")
    } else if (index % 4 == 0) {
        console.log("minino")
    } else {
        console.log(index)
    }
}

