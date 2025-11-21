// NodeList = Coleção estática de elementos HTML por (id, classe, elemento)
//Pode ser criada usando querySelectyorAll()
//Semelhante a um array, mas sem (map, filter, reduce)
//NodeList não será atualizado automaticamente para refletir as alterações

let buttons = document.querySelectorAll(".buttons");

console.log(buttons)

//ADD HTML/CSS PROPERTIES

/*buttons.forEach(button =>{
    button.style.backgroundColor = "aqua"
    button.textContent += "😎"
})*/

//CLICK EVENTS LISTENERS

/*buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "blue"
        event.target.style.color = "white"
    });
})*/

//MOUSEOVER + MOUSETOUT EVENT LISTENER

/*buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "blue"
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "aqua"
    });
});*/


// ADD AN ELEMENT

/*const newButton = document.createElement("button"); //STEP1
newButton.textContent = "Button 5 ";//STEP 2
newButton.classList = "buttons";
document.body.appendChild(newButton)//STEP 3

buttons = document.querySelectorAll("button")

console.log(buttons)*/

//REMOVE AN ELEMENT

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove()
        buttons = document.querySelectorAll(".buttons")
        console.log(buttons)
    })
})