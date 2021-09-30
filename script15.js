function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.querySelector('div#res')
    if(fano.value.length==0 || fano.value>ano){
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'masculino'
            if(idade<10){
                img.setAttribute('src','img/bg-menino.png')
            } else if (idade <18) {
                img.setAttribute('src','img/bg-adolescente-m.png')
            } else if (idade <65) {
                img.setAttribute('src','img/bg-homem.png')
            } else{
                img.setAttribute('src','img/bg-idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'feminino'
            if(idade<10){
                img.setAttribute('src','img/bg-menina.png')
            } else if (idade <18) {
                img.setAttribute('src','img/bg-adolescente-f.png')
            } else if (idade <65) {
                img.setAttribute('src','img/bg-mulher.png')
            } else{
                img.setAttribute('src','img/bg-idosa.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}