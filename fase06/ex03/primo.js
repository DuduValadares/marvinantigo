function primo(num) {
     num = Math.abs(num);
    for (i=2;i<=num;i++) {
        if (num % i !== 0)
            return "Sim";
        else
            return "Não";
        } 
    }