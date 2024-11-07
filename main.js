let iterator = -1;
let good_answers = 0;

const questions = [
    "Da li je izraz <span class='keyword-true'>TRUE</span> <span class='keyword-and'>and</span> <span class='keyword-false'>FALSE</span> jednak <span class='keyword-true'>TRUE</span> ili <span class='keyword-false'>FALSE</span>?",
    "Šta će biti rezultat izraza <span class='keyword-false'>FALSE</span> <span class='keyword-or'>or</span> <span class='keyword-true'>TRUE</span>?",
    "Da li je izraz <span class='keyword-not'>not</span> <span class='keyword-true'>TRUE</span> jednak <span class='keyword-true'>TRUE</span> ili <span class='keyword-false'>FALSE</span>?",
    "Šta će biti rezultat izraza <span class='keyword-true'>TRUE</span> <span class='keyword-or'>or</span> <span class='keyword-false'>FALSE</span> <span class='keyword-and'>and</span> <span class='keyword-false'>FALSE</span>?",
    "Da li je izraz <span class='keyword-not'>not</span> (<span class='keyword-false'>FALSE</span> <span class='keyword-or'>or</span> <span class='keyword-true'>TRUE</span>) jednak <span class='keyword-true'>TRUE</span> ili <span class='keyword-false'>FALSE</span>?",
    "Šta će biti rezultat izraza <span class='keyword-true'>TRUE</span> <span class='keyword-and'>and</span> <span class='keyword-true'>TRUE</span> <span class='keyword-or'>or</span> <span class='keyword-false'>FALSE</span>?",
    "Da li je izraz <span class='keyword-not'>not</span> (<span class='keyword-true'>TRUE</span> <span class='keyword-and'>and</span> <span class='keyword-false'>FALSE</span>) jednak <span class='keyword-true'>TRUE</span> ili <span class='keyword-false'>FALSE</span>?",
    "Šta će biti rezultat izraza <span class='keyword-false'>FALSE</span> <span class='keyword-and'>and</span> (<span class='keyword-not'>not</span> <span class='keyword-true'>TRUE</span>)?",
    "Da li je izraz <span class='keyword-not'>not</span> (<span class='keyword-not'>not</span> <span class='keyword-false'>FALSE</span>) jednak <span class='keyword-true'>TRUE</span> ili <span class='keyword-false'>FALSE</span>?",
    "Šta će biti rezultat izraza <span class='keyword-true'>TRUE</span> <span class='keyword-and'>and</span> (<span class='keyword-true'>TRUE</span> <span class='keyword-or'>or</span> <span class='keyword-false'>FALSE</span>)?",
    "Ako je <span class='keyword-variable'>x</span> jednako <span class='keyword-true'>TRUE</span> i <span class='keyword-variable'>y</span> jednako <span class='keyword-false'>FALSE</span>, šta će biti rezultat <span class='keyword-if'>if</span> (<span class='keyword-variable'>x</span> <span class='keyword-and'>and</span> <span class='keyword-not'>not</span> <span class='keyword-variable'>y</span>)?",
    "Ukoliko je <span class='keyword-variable'>a</span> jednako <span class='keyword-false'>FALSE</span>, šta će biti rezultat izraza <span class='keyword-if'>if</span> (<span class='keyword-variable'>a</span> <span class='keyword-or'>or</span> <span class='keyword-true'>TRUE</span>)?",
    "Ako je <span class='keyword-variable'>p</span> jednak <span class='keyword-true'>TRUE</span> i <span class='keyword-variable'>q</span> jednak <span class='keyword-false'>FALSE</span>, šta će se desiti u izrazu <span class='keyword-if'>if</span> (<span class='keyword-variable'>p</span> <span class='keyword-and'>and</span> (<span class='keyword-variable'>q</span> <span class='keyword-or'>or</span> <span class='keyword-true'>TRUE</span>))?",
    "Ako je <span class='keyword-variable'>num</span> jednako 10, šta će biti rezultat izraza <span class='keyword-if'>if</span> (<span class='keyword-variable'>num</span> <span class='keyword-greater-than'>> </span> 5 <span class='keyword-and'>and</span> <span class='keyword-variable'>num</span> <span class='keyword-less-than'><</span> 15)?",
    "Ukoliko je <span class='keyword-variable'>val</span> jednako <span class='keyword-false'>FALSE</span>, koji će biti ishod izraza <span class='keyword-if'>if</span> (<span class='keyword-not'>not</span> <span class='keyword-variable'>val</span>)?",
    "Ako je niz [true, true, false], šta će biti rezultat funkcije all za ovaj niz?",
    "Šta će biti rezultat funkcije all za niz [1, 'hello', true]?",
    "Ako je niz prazan [], šta će biti rezultat funkcije all za njega?",

    // Pitanja za funkciju any
    "Ako je niz [false, false, false], šta će biti rezultat funkcije any za ovaj niz?",
    "Šta će biti rezultat funkcije any za niz [0, null, '', false]?",
    "Ako je niz [0, 1, 2], šta će biti rezultat funkcije any za ovaj niz?",

    // Pitanja za funkciju bool
    "Šta će biti rezultat funkcije bool za vrednost 0?",
    "Ako je vrednost 'hello', šta će biti rezultat funkcije bool za nju?",
    "Šta će biti rezultat funkcije bool za prazan niz []?",
    "Da li je ovo najbolji kviz?"
];





const answers = [
    false,  // Odgovor na prvo pitanje
    true,   // Odgovor na drugo pitanje
    false,  // Odgovor na treće pitanje
    true,   // Odgovor na četvrto pitanje
    false,  // Odgovor na peto pitanje
    true,   // Odgovor na šesto pitanje
    true,   // Odgovor na sedmo pitanje
    false,  // Odgovor na osmo pitanje
    true,   // Odgovor na deveto pitanje
    true,    // Odgovor na deseto pitanje
    true,   // Odgovor na prvo dodatno pitanje
    true,   // Odgovor na drugo dodatno pitanje
    true,   // Odgovor na treće dodatno pitanje
    true,   // Odgovor na četvrto dodatno pitanje
    true,    // Odgovor na peto dodatno pitanje
    // Odgovori za funkciju all
    false, // all([true, true, false]) je false
    true,  // all([1, 'hello', true]) je true (sve vrednosti se tretiraju kao true)
    true,  // all([]) je true (prazan niz vraća true za funkciju all)

    // Odgovori za funkciju any
    false, // any([false, false, false]) je false
    false, // any([0, null, '', false]) je false (nema true vrednosti)
    true,  // any([0, 1, 2]) je true (ima barem jedna true vrednost)

    // Odgovori za funkciju bool
    false, // bool(0) je false
    true,  // bool('hello') je true (neprazan string je true)
    false,  // bool([]) je false (prazan niz je false)
    true
];

function iducePitanje() {
    // Prikaži trenutnu pitanje
    iterator++;
    if (iterator > 24) { // Proveri da li je dostignut kraj pitanja
        iterator = 0; // Ponovo počni od prvog pitanja
        kraj();
    }
    document.getElementById("pitanje").innerHTML = questions[iterator];
    document.getElementById("broj").innerHTML = (iterator + 1) + ". ";
    if(good_answers >= 25)good_answers = 25;
    document.getElementById("brojTacnih").innerHTML = good_answers + "/25";

    //console.log("Prikazano pitanje: " + questions[iterator]);
    //console.log(iterator);
}

function provjeriOdgovorT(){
   if(answers[iterator] === true){
     console.log("yeah");
     good_answers++;
   }else{
    console.log("bad");
   }
   iducePitanje();
}

function provjeriOdgovorN(){
    if(answers[iterator] === false){
        console.log("yeah");
        good_answers++;
    }else{
        console.log("bad");
    }
    iducePitanje();
}

function kraj(){
    alert("Quiz zavrsen! Dobio/la si " + good_answers + " od  25 tacnih odgovora.");    document.getElementById("tacno").disabled = true;
    document.getElementById("ne-tacno").disabled = true;
    document.getElementById("nextButton").disabled = true;
}

