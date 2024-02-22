import { fuggveny } from "./fuggveny.js"


//console.log(fuggveny(5))

var szam = 12; /* globális, fájl szintű */
var a = 111111;

console.log(szam);

function fv1() {
    var szam;
    console.log(szam); /* 12 -> nem undefined ez nem hibaüzenet, hanem egy ...*/
    var szam = 24 /* lokális, függvény szintű */
    var szam2 = 34
    console.log(szam2)
}

fv1()

//console.log(szam2) /* hibaüzenet */
//console.log(szam);

let szam = 12

function fv2() {

    let szam2 = 24;
    console.log(szam2); /* megáll a program futása, hibaüzenet */
    {
        let szam2 = 33 /* let hatóköre blokk szintű */
        console.log(szam2); /* 33 */
    }
    console.log(szam2); /* 24 */
    console.log(szam)
}

//fv2()
//console.log(szam)
//console.log(szam2) /* hibaüzenet */


for (var index = 0; index < 3; index++) {
    console.log(index)

}
console.log(index) /* hibaüzenet, nem érhető el az index változó */


const nev = "Béla"; /* konstans deklarált változó, később nem változtatható meg */
//nev = "Jenő"


/* **** lista **** */

let lista = ["első", "második", "harmadik"]

console.log(lista)
console.log(lista[0])

console.log("A lista hossza: " + lista.length)

lista[10] = "tizenegyedik"
console.log(lista)
console.log(lista[5])

lista.push("következő elem") //lista végére beteszi az adott elemet
console.log(lista)
lista.pop() /* eltávolítja a lista végéről az utolsó elemet */
console.log(lista)

lista = ['a', 'b', 'c']
console.log(lista)

const lista2 = [11, 12, 13, 14]
// lista2 = [23, 24, 25] hibaüzenet, konstanshoz akarok új értéket rendelni.

lista2[0] = 11111111
lista2.push(222222222)
lista2.pop()
lista2.pop()
lista2.pop()
lista2.pop()
lista2.pop()
console.log(lista2)


// Konstans lista esetén a lista memóriában elfoglalt helye fix, tehát a memória címe nem változtatható meg, viszont az értékei megváltoztathatóak, hozzáfűzhetünk újabb elemeket, vagy eltávolíthatjuk az összes elemeit is.
// A lista címe fix marad.


/* név, telefonszám, kor */
/* objektumok */
const SZEMELY1 = {
    nev: "Gabi",
    tel: "06-30-6985471",
    kor: 12
}
SZEMELY1.nev = "Jolán"
console.log(SZEMELY1.nev)
SZEMELY1.barat = true
console.log(SZEMELY1)

const SZEMELY2 = {
    nev: "Béla",
    tel: "06-30-232435",
    kor: 30,
    barat: false
}


const SZEMELYLISTA = [
    {
        nev: "Gabi",
        kor: "06-30-6985471",
        kor: 12
    },
    {
        nev: "Béla",
        tel: "06-30-232435",
        kor: 30,
        barat: false
    }

]

/* írd ki Gabi korát! */

console.log(SZEMELYLISTA[0].kor)










    /*****  JEGYZET  *****/

// A "var"-al deklarált változó hatóköre lehet globális, fájl szintű vagy függvény szintű lokális!
// A "var" változó esetén is működik a void string, azaz deklarációkor úgy működik, mintha a hatóköre tetején hoztuk volna létre!
// Ha deklarációkor nem adunk értéket, akkor autómatikusan az "undefined" értéket kapjuk!
// Lokális változó a függvényen kívül nem értelmezhető!

// A "let"-tel deklarált változó hatóköre lehet globáis vagyis fájl szintű, illetve lokális de blokk szintű
// A "blokk" -> kapcsos zárójelek közti rész

// JavaScript objektum egy olyan összetett adatszerkezet, ami összetartozó adatokat kezel egyben, kulcs értékpárokból áll, a kulcsok jelentik az objektum tulajdonságait, az értékek pedig a hozzájuk tartozó értékeket, és kapcsos zárójelek közé írjuk.