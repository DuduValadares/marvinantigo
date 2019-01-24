function por42(num1,num2) {
    for (i = num1; i <= num2; i++)
        if (i % 42 && i != 42)
            return i;
        else
            console.log("Não encontrado");
    }