function somaPares(num1,num2) {
    num1 = Math.ceil(num1);
    x = [];
    
    for (i=num1; i<num2; i++) {
        if (i%2===0)
            x.push(i);
        }
    var soma = 0;
    for (i=0; i<x.length; i++) {
        soma += x[i];
        }
    return soma
    }