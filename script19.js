function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    tab.innerHTML=``
    if(num.value.length==0){
        alert(`Indique um número para fazer o cálculo`)
    } else {
        let n = Number(num.value)
        for(c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)            
        }
    }
}