var msg= window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 16
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora <12) {
    // Bom dia
    img.src = 'img/Manha-270.png'
    document.body.style.background = '#dcb81d'
}else if (hora >=12 && hora <18){
    // Boa tarde 
    img.src = 'img/Tarde-270.png'
    document.body.style.background = '#258d8d'
}else{
    //Boa noite 
    img.src = 'img/Noite-270.png'
    document.body.style.background = '#180155'

}