function animais(arr) {
    for (i=0; i < arr.length; i++) {
        delete arr[i].altura;
        arr[i].idade = i + 5
        }
        return arr
    }
