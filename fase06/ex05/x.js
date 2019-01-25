function x(str) {
    str = str.toLowerCase();
    var cheese = []
    for (i=0;i<str.length;i++) {
        if (str.substr(i,1) === "x")
            cheese += "x"
        }
    return cheese.length
}