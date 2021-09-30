var valor = document.getElementById('fnum')
var tab = document.getElementById('flista')
var res=document.querySelector('article.res')
var v = []
function adicionar(){
    if(valor.value<=0){
        alert('Digite um número entre 1 e 100 e depois clique em "Adicionar"')
    } else if(valor.value>100) {
        alert('Digite um número menor que 100 e depois clique em "Adicionar"')
    } else if(v.indexOf(valor.value)!=-1){      
        alert('Esse valor já foi adicionado')
    } else {
        v.push(valor.value)
        let item = document.createElement('option')
        item.text += `Valor ${valor.value} adicionado`
        item.value = `tab${v.length}`
        tab.appendChild(item)   
    }
    valor.value=''
    valor.focus()
}
function finalizar(){
    var qtd = v.length
    var maior = 0
    var menor = Number(v[0])
    var stotal = 0
    var media = 0
    res.innerHTML=''    
    if(v.length==0){
        alert('Adicione valores antes de finalizar.')
    } else {
        for(let c in v){
            stotal = stotal + Number(v[c])
            if(Number(v[c])>maior){
              maior=Number(v[c])
            }
            if(Number(v[c])<menor){
              menor=Number(v[c])
            }
            media=stotal/qtd
          }
          res.innerHTML += `<p>Ao todo, temos ${qtd} números cadastrados.</p>`
          res.innerHTML += `<p>O mairo valor informado foi ${maior}.</p>`
          res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
          res.innerHTML += `<p>Somando todos os valores, temos ${stotal}.</p>`
          res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
