//classList = Propriedade `element` em JavaScript usada para interagir com a lista de classes (classes CSS) de um elemento.
//Permite criar classes reutilizáveis ​​para vários elementos em sua página web.

//`add()`
//`remove()`
//`toggle` (Remove se presente, Adiciona se não)
//`replace(OldClass, newClass)`
//`contains()`

// const H1 = document.getElementById("H1");
// const mybutton = document.getElementById("mybutton");

/*ADD = mybutton.classList.add("enable");
mybutton.classList.remove("enable");*/

/* ADD/REMOVE = mybutton.addEventListener("mouseover", event =>{
    event.target.classList.add("hover")
})

mybutton.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover")
})*/

/* TOGGLE = mybutton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover")
})

mybutton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover")
})*/

/*H1.classList.add("enabled")

H1.addEventListener("click", event =>{
    
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤑";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
})

mybutton.classList.add("enabled")

mybutton.addEventListener("click", event =>{
    
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤑";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
})*/



let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.classList.remove("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
    
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
    
})

buttons.forEach(button => {
    button.addEventListener("click", event =>{
    if(event.target.classList.contain("disable")){
        event.target.textContent += "😎"
    }else{
        event.target.classList.replace("enable", "disabled");
    }
    });
});