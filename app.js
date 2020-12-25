let parcalar = ["r3a2f", "t1n2aj", "no12pn4at", "re33li5ops", "z6o5s4ge", "no2yi3sna4p8süs"];
let garaj = [];

//Harfler buyutuldu
function doCap(capitalize) {
    let result = String(capitalize).toUpperCase().split(",")
    return result
}

//Numaralar silindi
function deleteNumber(del) {
    let result = String(del).replace(/\d+/g, '');
    return result
}

//Ters cevirme islemi yapildi
function reverse(parca) {
    let result = String(parca).split("").reverse().join("");
    return result
}

function Yeni(parca) {
    let sonuc = reverse(parca);
    let BuyutmeSonuc = doCap(sonuc);
    let SilmeSonuc = deleteNumber(BuyutmeSonuc);
    let GarajinYeniHali = SilmeSonuc.split(",")
    return GarajinYeniHali;
}


garaj = garaj.concat(Yeni(parcalar));
garaj.map(function (parca,i) {
    garaj[i] = 'KEREMAG_' + parca + '//' + new Date();

});
console.log(garaj);

