function pinguins(arrdeobj) {
    var roupa = {cabeca:"oculos de sol",camisa:"jaqueta polar",pes:"tenis"};
    for (i=0;i<arrdeobj.length;i++) {
        arrdeobj[i].roupa = roupa;
        }
    return arrdeobj;
    }