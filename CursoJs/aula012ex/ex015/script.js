function verificar() {
    var data = new Date()
    ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero  = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if (fsex[0].checked) {
        var genero = 'Homem'
        if (idade >=0 && idade < 11 ) {
            //crianca
            img.setAttribute('src', 'bebeh.png')
        } else if (idade < 25) {
            //jovem
            img.setAttribute('src', 'jovemh.png')
        } else if (idade < 62) {
            //adulto
            img.setAttribute('src', 'homem.png')
        } else {
            // idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        var genero = 'Mulher'
        if (idade >=0 && idade < 11 ) {
            //crianca
            img.setAttribute('src', 'bebef.png')
        } else if (idade < 25) {
            //jovem
            img.setAttribute('src', 'jovemf.png')
        } else if (idade < 62) {
            //adulto
            img.setAttribute('src', 'mulher.png')
        } else {
            // idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
    
}