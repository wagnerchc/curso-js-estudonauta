function contar(){
    let inicio =document.getElementById('txtinicio')
    let fim =document.getElementById('txtfim')
    let passo =document.getElementById('txtpasso')
    let res=document.querySelector('article.res')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    res.innerHTML = ``
    if(inicio.value.length==0 || fim.value.length==0){
        alert('Preencher todos os campos, para executar o cálculo')
    } else {
        if(passo.value.length===0){
            res.innerHTML += `<p id="aviso"><strong>O valor do passo não foi informado, por isso utilizamos o número 1 como passo.</strong></p>`
            p=1
        } else {
            res.innerHTML += `Começando... `
            if(i<f){
                for(let c=i; c<=f; c+=p){
                    res.innerHTML += `${c}`
                    if(c<f){
                        res.innerHTML += ` \u{1F449} `
                    }
                }
            } else {
                for(let c=i; c>=f; c-=p){
                    res.innerHTML += `${c}`
                    if(c<=i){
                        res.innerHTML += ` \u{1F449} `
                    }    
                }
            }
            res.innerHTML += ` ...Fim! \u{1F3C1}`
        }
    }
}
