let felsosok = [];
let alsosok = [];

// Random számokkal töltöm fel a két tömböt
for (let i = 0; i < 25; i++) {
    alsosok.push((Math.random() * (1.20 - 1.70) + 1.70).toFixed(2));
}

for (let i = 0; i < 22; i++) {
    felsosok.push((Math.random() * (1.50 - 2.10) + 2.10).toFixed(2));
}

console.log("Alsósok:");
console.log(alsosok);
console.log("Felsősök:");
console.log(felsosok);
console.log("A két tömb indexekkel kíratva:");

for (let i = 0; i < alsosok.length; i++) {
    console.log(i.toString() + ". - " + alsosok[i]);
}
for (let i = 0; i < felsosok.length; i++) {
    console.log(i.toString() + ". - " + felsosok[i]);
}


function magassag() {
    let oszt = document.getElementById("osztaly").value;
    let osszeg = 0;
    let atlag;

    // Alsósok átlaga
    if (oszt == "also") {
        for (let i = 0; i < alsosok.length; i++) {
            osszeg = osszeg + parseFloat(alsosok[i]);
        }
        atlag = osszeg / alsosok.length;
        document.getElementById("letszam").innerHTML = "Az alsós osztály létszáma: " + alsosok.length + " fő";
        document.getElementById("atlagMag").innerHTML = "Az alsós osztály átlag magassága: <b>" + atlag.toFixed(2) + " m</b>";
    }

    // Felsősök átlaga
    else if (oszt == "felso") {
        for (let i = 0; i < felsosok.length; i++) {
            osszeg = osszeg + parseFloat(felsosok[i]);
        }
        atlag = osszeg / felsosok.length;
        document.getElementById("letszam").innerHTML = "A Felsős osztály létszáma: " + felsosok.length;
        document.getElementById("atlagMag").innerHTML = "A Felsős osztály átlag magassága: <b>" + atlag.toFixed(2) + " m</b>";
    }
}

// ----------A háromdimenziós tömb -------------------------------------------------------------------------------
function salary() {
    let alkalmazottak = [
        ["alice", "programozó", 140000],
        ["bob", "programozó", 140000],
        ["cecil", "tesztelő", 100000]
    ];
    let fizet = 0;
    let munkakor = document.getElementById("bevitel").value;

    // Kiszedem mindegyik tömbből a második elemet
    for (let i = 0; i < alkalmazottak.length; i++) {
        console.log(alkalmazottak[i][1]);

        // Összehasonlítom a vizsgált elemet a bekért adattal
        if (munkakor == alkalmazottak[i][1]) {
            // Ha megegyezik adja hozzá az össz kifizetéshez a harmadik elemet
            fizet = fizet + alkalmazottak[i][2];
        }
    }

    console.log(fizet);

    if (fizet === 0) {
        document.getElementById("payment").innerHTML = "<mark>Nincs ilyen pozíció! </mark>";
    }
    else {
        document.getElementById("payment").innerHTML = "A " + munkakor + " pozícióra <b>" + fizet.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' }) + "</b>-ot költött a cég.";
    }
}

// --------------Lottósorsolás----------------------------------------------------------------------
// Lusta voltam 90-szer leírni ugyanazt, megpróbáltam a check-boxokat dinamikusan létrehozni
// Ez a függvénye -->
function letrehoz(index) {
    let ix = index.toString();

    let whiteSpace = document.createElement('span');
    let label = document.createElement('label')
    label.htmlFor = ix;
    label.appendChild(document.createTextNode(ix));

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = ix;
    checkbox.name = ix;
    checkbox.value = ix;

    let container = document.getElementById('container');
    container.appendChild(whiteSpace);
    container.appendChild(label);
    container.appendChild(checkbox);
}
// itt hívom meg a checkbox-gyárat
for (let i = 1; i < 91; i++) {
    letrehoz(i)
}

// Válasszon a checkbox-ok közül az ápolt
function sorsolas() {
    let tippek = [];
    let sorsoltak = [];
    let nyero = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    document.getElementById("eredmeny").innerHTML = "";

    for (let i = 0; i < checkboxes.length; i++) {
        if (tippek.length < 5) {
            tippek.push(checkboxes[i].value);
        }
    }
    tippek.sort(function (a, b) { return a - b });
    console.log(tippek);
    document.getElementById("tipped").innerHTML = "Az ön által választott számok emelkedő sorrendben: <b>" + tippek + "</b>";

    // Itt a gép sorsol - fontos, hogy a RANDOM esetén ne kerüljön be két azonos szám...
    // ...ezért Halmazba olvastatom be a számokat
    const gepi = new Set();

    while (gepi.size < 5) {
        gepi.add(Math.floor(Math.random() * 90) + 1);
    }
    document.getElementById("szoveg").innerHTML = "A gép által sorsolt e heti nyerőszámok emelkedő sorrendben:";

    // Könnyebb az életem, ha a halmazt array típusra váltom, hogy könnyen összehasonlítsam a játékos számaival
    gepi.forEach(function (value) {
        sorsoltak.push(value);
    })

    sorsoltak.sort(function (a, b) { return a - b });
    console.log(sorsoltak);
    document.getElementById("sorsolt").innerHTML = "<b>" + sorsoltak + "</b>";

    // Végiglépkedek mindkét tömbön
    for (let i = 0; i < sorsoltak.length; i++) {
        for (let j = 0; j < tippek.length; j++) {
            if (sorsoltak[i] == parseInt(tippek[j])) {
                nyero.push(sorsoltak[i]);
            }
        }
    }

    if (nyero.length < 1) {
        document.getElementById("nyert").innerHTML = "Sajnos önnek nem volt találata ezen a héten.";
    }
    else {
        console.log(nyero);
        document.getElementById("eredmeny").innerHTML = "Gratulálok, önnek <b>" + nyero.length + "</b> találata van.";
        document.getElementById("nyert").innerHTML = "Az ön találatai: <b>" + nyero + "</b>";
    }
}

// ---- Gyakorló feladatok -----------------
console.log("Gyakorló feladat 2");
let t = ["hello", "5", "5", , ,];
console.log(t[0]);
console.log(t[1]+t[2]);
console.log(t.length);
console.log(t[3]);
console.log(t[4]);

console.log("Gyakorló feladat 4");

let t2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let index = 1; 
for(let i = 0; i < t2.length; i++){
    let egyTombHossza = t2[i].length;
    for(let j = 0; j < egyTombHossza; j++) {
        console.log(index +". elem: " + t2[i][j]);
        index ++;
    }    
}