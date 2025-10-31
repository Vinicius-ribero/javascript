//SWITCH = O comando `switch` pode ser uma substituição eficiente para muitas instruções `else if`.

/*var dia = "pizza"

switch (dia){
    case 1:
        console.log("Hoje é segunda-feira")
        break
        case 2 :
            console.log("Hoje é Terça-feira")
            break
        case 3 :
            console.log("Hoje é Quarta-feira")
            break
        case 4 :
            console.log("Hoje é Quinta-feira")
            break
        case 5 :
            console.log("Hoje é Sexta-feira")
            break
        case 6:
            console.log("Hoje é Sabádo")
            break
        case 7:
            console.log("Hoje é Domingo")
            break
        default:
            console.log(`${dia} não é um dia `)
} */

   var pontuação = 33 ;
var notas;

switch (true) {
    case pontuação >= 90:
        notas = "A";
        break;
    case pontuação >=80:
        notas = "B";
        break
    case pontuação >= 70:
        notas = "C"
        break
    case pontuação >= 60:
        notas = "D"
        break
    default:
        notas = "F"
}

console.log(notas)

