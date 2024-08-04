function clicar() {
    var ini = document.getElementById("in1")
    var fi = document.getElementById("fi1")
    var interval = document.getElementById("inter1")
    var res = document.querySelector('div#res')
    if (ini.value.lenght == 0 || fi.value.lenght == 0 || interval.value.lenghtv == 0) {
        alert('[ERRO] Verifique os dados e tente novamente')
   } else {
    res.innerHTML=`Contando: `
        var i = Number(ini.value)
        var f = Number(fi.value)
        var int = Number(interval.value)
        if (i < f) {
            //contagem crescente
            for ( let c = i ; c <= f; c+=int ) {
                res.innerHTML += `${c}, `
            }
        } else if (i == f) {
            alert('[ERRO] tente novamente')
            res.innerHTML = 'Tente novamente'
        } else {
            //contagem decrescente
            for (let c = i;c>=f; c-=int) {
                res.innerHTML += `${c}, `
            }
        }
   }
   res.innerHTML += `\u{1f3c1}`
}