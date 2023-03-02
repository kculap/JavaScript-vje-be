// ###### Konzola
//console.log(5+5==11)
//console.log ('Pozdrav iz konzole')
//console.error('Pozdrv iz konzole')
//console.warn('Pozdrav iz konzole')

//###### Dokument
//document.write('Pozdrav sa stranice')
//document.getElementById('poruka').innerText ="Pozdrav"

//###### Window
//window.alert('Pozdrav iz Pop up-a')
//window.open('')

/*
let vjezba;
vjezba = 'Ovo je vježba1';
console.log (vjezba)

let godine = 5.1;
let mjesec = 3;
let rezultat = godine + mjesec;
console.log(rezultat)

console.log(typeof(mjesec))
*/

/*
let neki_broj = 65;
let drugi_broj = '5';
drugi_broj = parseInt(drugi_broj);
let rezultat = neki_broj + drugi_broj;
console.log(rezultat)
*/
/*
let ime = "Katarina";
let prezime ="Ćulap"
let godine = 23;
/*
console.log(ime);
console.log(prezime);
console.log(godine);
*/

//console.log ("Moje ime i prezime je " + ime, prezime + " imam "+ godine + " godine ")

// ##### INCREMENT/DECREMENT
/*godine++; //povećava za jedan
console.log("Sljedeće godine ću imat" + godine)
*/

/*
godine += 2; //povećava za 2
console.log("Za dvije godine ću imati" + godine)
*/

/*
godine -=3; //smanjuje za 3
console.log("Prije 3 godine sam imala" + godine)
*/

//##### IF
/*
let prviBroj = 17
let drugiBroj =15

if (prviBroj < drugiBroj){
    console.log ("Prvi broj je manji od drugog")
}else {console.log ("Drugi broj je veći")}
*/

/*
let vrijeme =18
if (vrijeme<10){
    console.log("Dobro jutro")
}else if (vrijeme<20)
{console.log ("Dobar dan")}
else {console.log("Dobro večer")}
*/


// #### SWITCH
/*
let mjesec=2

switch(mjesec) {
    case 1: 
    console.log("Siječanj");
    break;

    case 2:
        console.log("Veljača");
    break;

    case 3:
        console.log("Ožujak");

}
*/

//###### WHILE PETLJA
/* 
let novcanice = 15;
let vrijednost = 10;
let izbrojano = 0;
let brojac = 0;

while (brojac< 25){
    izbrojano++;
    console.log(izbrojano);
    brojac++
}
*/
/* 
let kuna= 50;
let izbrojano = 0;
let brojac = 0;

while (brojac<50){
    izbrojano++;
    brojac++;
    console.log(izbrojano*7.53)
}
*/

// #### Nizovi
/*
let novcanice = [10,5,20,50,10,10,20,50,5]

let broj_novcanice = novcanice.length;
console.log (novcanice.length)

let izbrojano = 0;

while(izbrojano < broj_novcanice){
    izbrojano++;
}

console.log ("Broj izbrojanih novčanica" + izbrojano)
*/
/*
let novcanice = [10,5,20,50,10,20,50];
let broj_novcanica = novcanice.length;
let brojac = 0;

while (brojac < broj_novcanica)
{brojac++
console.log(novcanice[brojac]);
}
*/

// ###### FOR PETLJA

/*
let novcanice = [10,5,20,50,10,20,50];
let broj_novcanica = novcanice.length;
let ukupno= 0;

for (let brojac = 0; brojac < broj_novcanica; brojac++){
    console.log(novcanice[brojac])
    
    ukupno= ukupno + novcanice[brojac];

}

console.log (ukupno);
*/

//niz može biti i String:
/*
let automobili = ["Audi", "BMW", "Porsche", "Mercedes"]

for (let automobil of automobili){
    console.log(automobil);
}

// #### FOREACH - ista stvar kao prethodna FOR
automobili.forEach(function(automobil){
console.log(automobil);
})

*/

// ####### OBJEKTI
/*
let automobili = {
    audi: ["70000", "2017.", "Q7"],
    bmw: ["50000", "2018.", "330D"],
    porsche: ["80000", "2016.", "Boxter"],
    mercedes: ["10000", "2019.", "S400"]
};


for(automobil in automobili){
    let naziv = automobil;
    let podaci = automobili[automobil]
   console.log(naziv + podaci)
}


//console.log(automobili.audi)
//console.log(automobili["porsche"])
*/


// ##### FUNKCIJE - da ne bismo ponavljali isti kod!
/*
let nekretnine = {
    stan: 70000,
    kuca: 150000,
    zemljiste: 30000
};

//Stan
let godine = 10 
let mjeseci = godine * 12;
let rata = nekretnine.stan / mjeseci;
rata = rata.toFixed(2); //skracivanje na dvije decimale

console.log( mjeseci + " mjeseci.")
console.log(rata + " eura")
console.log("Mjesečna rata za stan iznosi " + rata + " na" + godine + " godina")

//Zemljiste
godine = 5;
mjeseci = godine *12;
rata= nekretnine.zemljiste / mjeseci

console.log ("Mjesečna rata za zemljište iznosi " + rata + " na " + godine )
*/

//Pomoću funkcija bi izgledalo ovako:

/*
let nekretnine = {
    stan: 70000,
    kuca: 150000,
    zemljiste: 30000
};

mjesecna_rata(15,'kuca') //proracun za kucu na 15 godina
mjesecna_rata(5, "zemljiste") //za zemljiste na 5 godina
mjesecna_rata(20, 'stan') // za stan na 20 godina

//Ova funkcija racuna mjesecnu ratu za neku nekretninu za odredeni broj godina
function mjesecna_rata(godine, vrsta_nekretnine){
let mjeseci = godine * 12;
let rata = nekretnine [vrsta_nekretnine] / mjeseci;
rata=rata.toFixed(2)

console.log("Mjesečna rata za " + vrsta_nekretnine + " iznosi " +  rata + " eura" + " na " + godine + " godina ");
};

*/

 


