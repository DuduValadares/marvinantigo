function ateZero(num) {
    var x = [];
    if (num > 0)
        for (i = 0; i <= num; i++)
        x.push(i);
    if (num < 0)
        for (i = num; i <= 0; i++)
        x.push(i);
    console.log(x);
    }