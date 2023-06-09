let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
Maneira tradicional;
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem  o valor ${valores[pos]}`)
}
*/

//Maneira moderna;
for(let pos in valores){
    console.log(`A posição ${pos} tem  o valor ${valores[pos]}`)
}
let pos1 = valores.indexOf(4)
let pos2 = valores[valores.indexOf(4)]
if (pos1 == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor ${pos2} está na posição ${pos1}`)
}