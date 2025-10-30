function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora =15

    msg.innerHTML = `Agora são ${hora}`

    if(hora >= 0 && hora <12){
        //Bom dia
        img.src = 'dia.jpg'
        document.body.style.backgroundColor = 'lightblue'
    } else if (hora >=12  &&  hora <=18) { 
        //Boa tarde!
        img.src ='tarde.jpg'
        document.body.style.backgroundColor = 'orange'
    } else if (hora >=18 && hora <= 23) {
        //boa noite
        img.src='noite.jpg'
        document.body.style.backgroundColor ='#191970'
    }
}