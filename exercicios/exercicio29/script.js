// .value é uma propriedade usada para pegar ou definir o valor de um elemento de formulário no HTML — como <input>, <textarea>, <select>,etc.
// .value é uma propriedade usada para pegar ou definir o valor de um elemento de formulário no HTML — como <input>, <textarea>, <select>, etc.


// Math.abs(x)	valor absoluto	Math.abs(-5)	5
// Math.round(x)	arredonda para o inteiro mais próximo	Math.round(4.7)	5
// Math.floor(x)	arredonda para baixo	Math.floor(4.9)	4
// Math.ceil(x)	arredonda para cima	Math.ceil(4.1)	5
// Math.pow(x, y)	potência (x elevado a y)	Math.pow(2, 3)	8
// Math.sqrt(x)	raiz quadrada	Math.sqrt(16)	4
// Math.random()	número aleatório entre 0 e 1	Math.random()	ex: 0.72

function roledados(){
    const numdedados = document.getElementById("numdedados").value
    const resultado = document.getElementById("resultado")
    const imgdedaos = document.getElementById("img")
    const values = []
    const imagens = []

    for(let i = 0; i < numdedados; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        imagens.push(`<img src="dados/${value}.png"> alt="dados ${value}">`)
    }

    resultado.textContent = `dados: ${values.join(', ')}`;
    imagens.innerHTML = imagens.join('')
    
}