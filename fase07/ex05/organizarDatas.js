function organizarDatas(arrdeobj) {
    function comp(a,b) {
        return new Date(a.dataDeChegada) - new Date(b.dataDeChegada);
    }
    return arrdeobj.sort(comp);
}