function inverter(arrstr) {
    if (typeof arrstr == "string") {
        var str = "";
        for (var i = arrstr.length - 1; i >= 0; i--) {
            str += arrstr[i];
        }
        return str;
    }
    else {
        var arr = [];
        while (arrstr.length > 0) {
            arr.push(arrstr.pop());
        }
        return arr;
    }
}
console.log(inverter([1,2,3,4,5]))