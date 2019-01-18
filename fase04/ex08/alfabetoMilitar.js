function alfabetoMilitar(vogal) {
    vogal=vogal.toLowerCase();
    if (vogal == "a")
        return "alpha";
    if (vogal == "e")
        return "echo";
    if (vogal == "i")
        return "india";
    if (vogal == "o")
        return "oscar";
    if (vogal == "u")
        return "uniform";
    else
        return false;
    }