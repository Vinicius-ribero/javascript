/*var pontuação = 100;
var notas;

switch(true){
    case pontuação >= 90:
        notas = "A";
        break;
    case pontuação >=80:
        notas = "B";
        break
    case pontuação >=70:
        notas = "C";
        break;
    case pontuação >=60:
        notas = "D";
        break;
    default:
        notas = "F"
    
}
    console.log(notas);*/

    //var dia = 1
    var data = new Date();
    var dia = data.getDay(); // retorna número de 0 a 6 (domingo=0)
    //var dia = 1

    switch (dia){
        case 1:
            console.log("Hoje é segunda-feira")
            break;
        case 2:
            console.log("Hoje é terça-feira");
            break;
        case 3:
            console.log("Hoje é quarta-feira");
            break;
        case 4:
            console.log("Hoje é quinta-feira");
            break;
        case 5:
            console.log("Hoje é Sexta-feira");
            break;
        case 6:
            console.log("Hoje é Sabado");
            break;
        case 7:
            console.log("Hoje é Domingo");
            break;
            default:
               console.log("Número inválido! Digite um valor de 1 a 7."); ;
    }
   

