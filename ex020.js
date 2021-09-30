let num = [5,8,2,9,3]
num[3]=6
num.push(7)
console.log(num)
console.log(`O número de vetores é ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O primeiro valor do vetor é ${num[num.length-1]}`)
num.sort()
console.log(`Array ordenado ficou assim: ${num}`)
for(c=0;c<num.length;c++){
    console.log(`O valor na posição ${c} é ${num[c]}`)
}
for(let c in num){
    console.log(`O valor na posição ${c} é ${num[c]}`)
}
console.log(num.indexOf(8))
console.log(num.indexOf(4))