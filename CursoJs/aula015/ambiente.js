/*var num = [5,6,7,8]
num[4] = 4
num.push(9)
console.log(`Nosso vetor é ${num}`)
console.log(num.length)*/

var num = [1,2,3,4,5,6,7,8,9,10,11]
var pos = 0

/*for (let pos = 0;pos < num.length; pos++ ) {
    console.log(num[pos])
}*/
while(pos < num.length) {
    console.log(`Na posiçao ${pos} tem ${num[pos]}`)
    pos++
}