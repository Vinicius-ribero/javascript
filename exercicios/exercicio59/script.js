// ES6 Module = Um arquivo externo que contém código reutilizável que pode ser importado em outros arquivos JavaScript. Escreva código reutilizável para diversos aplicativos. Pode conter variáveis, classes, funções e muito mais. Introduzido como parte da atualização ECMAScript 2015.

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI)
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
