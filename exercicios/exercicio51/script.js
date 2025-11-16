//Objeto de data = objetos que contêm valores que representam datas e horas. Esses objetos de data podem ser formatados.

//DATA(ano, mês, dia , hora, minuto, segundo, ml)

// const data = new Date(2026, 0, 1,2,3,4 ,5);

// console.log(data);

/*const data = new Date();

const ano = data.getFullYear();
const mês = data.getMonth();
const dia = data.getDate();
const horas = data.getHours();
const minuto = data.getMinutes();
const segundos = data.getSeconds();
const diasemanal = data.getDay()


console.log(ano);
console.log(mês);
console.log(dia);
console.log(horas);
console.log(segundos);
console.log(diasemanal)*/

//ANO NOVO DEFINIR OUTRAS DATAs
/*const data = new Date();
data.setFullYear(2026);
data.setMonth(0);
data.setDate(1);
data.setHours(2);
data.setMinutes(3);
data.setSeconds(4);

console.log(data)*/


//Comparar Datas 

const data1 = new Date("2023-12-31");
const data2 = new Date("2023-0-01");

if(data2 > data1){
    console.log("FELIZ ANO NOVO!");
}

