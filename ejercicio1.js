
/*
Escribir un programa utilizando JavaScript que imprima una X construida a base de la letra X y utilizar el
carácter de subrayado como espacio. El tamaño de la x se basa en una variable n que indicará el tamaño
de la letra para imprimir (en una matriz de n x n). Por ejemplo, para n: = 5 se obtiene:
X___X
_X_X_
__X__
_X_X_
X___X
y para n:=6 se obtiene:
X____X
_X__X_
__XX__
__XX__
_X__X_
X____X
Si n es igual a cero imprimir "ERROR"
*/


function drawX(n) {
    if (n <= 0) return console.log("ERROR")
    for (let row = 0; row < n; row++) {
        let a = ""
        for (let col = 0; col < n; col++) {
            if (row == col || row == Math.abs(col + 1 - n)) {
                a += "X"
            } else {
                a += "_"
            }

        }
        console.log(a)
    }
}

drawX(5)
drawX(0)
drawX(6)