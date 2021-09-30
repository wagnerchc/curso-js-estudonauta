function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = Number(data.getHours())
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora>=0 && hora <12) {
        img.src = '/Praticas/img/bg-manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora>= 12 && hora <18) {
        img.src = '/Praticas/img/bg-tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = '/Praticas/img/bg-noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}
