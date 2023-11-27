
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora =  data.getHours()


    msg.innerText = `Agora são ${hora} horas`
    if (hora >= 0 && hora <=12) {
        
        img.src = ' foto-manha.png'
        document.body.style.background = '#EDAAA0'
    } else if (hora >= 13 && hora <18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#F7C471'
    } else{
        //BOA NOITE
        img.src = 'foto-noite.png'
        document.body.style.background = '#032144'
    }
}