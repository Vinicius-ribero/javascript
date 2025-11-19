//eventsListener = Escute eventos específicos para criar páginas web interativas: clique, passar o mouse, retirar o mouse, adicione um ouvinte de eventos (evento, retorno de chamada).


const box = document.getElementById("box");
const button = document.getElementById("button");

box.addEventListener("click", event => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.textContent = "OUCH! 🤕";
})

box.addEventListener("mouseover",  event =>{
    event.target.style.backgroundColor = "lightgray";
    event.target.style.color = "white";
    event.target.textContent = "Don't do it 😮";
})

box.addEventListener("mouseout",  event =>{
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.textContent = "Click Me 🙂";
    
})

button.addEventListener("click", event => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.textContent = "OUCH! 🤕";
})

button.addEventListener("mouseover",  event =>{
    event.target.style.backgroundColor = "lightgray";
    event.target.style.color = "white";
    event.target.textContent = "Don't do it 😮";
})

button.addEventListener("mouseout",  event =>{
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.textContent = "Click Me 🙂";
    
})

