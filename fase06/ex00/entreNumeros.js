function entreNumeros(min,max){
    if (min < max)
        for (i = min; i <= max; i++) {
            console.log(i);
        }
    if (min > max)
        for (i = max; i <= min; i++) {
            console.log(i);
        }
}