function informacoes (obj,prop) {
    if (typeof obj[prop] === 'undefined')
        return false;
    else 
        return obj[prop];
    }