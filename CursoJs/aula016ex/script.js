let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#selectid')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}



function adicionar() {
   if ((isNumero(num.value) && !inLista(num.value, valores))) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML=''
   } else {
    window.alert('Número invalido, tente novamente')
   }
    
}
 function finalizar() {
    if (valores.length == 0) {
        alert('Adicione um número e tente novamente')
    } else {
        let tot = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo ${tot} número(s) foram adicionados</p>` 
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>A a soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`

    }
 }