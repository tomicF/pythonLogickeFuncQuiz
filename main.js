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
    "Šta će biti rezultat izraza <span class='keyword-true'>TRUE</span> <span class='keyword-and'>and</span> (<span class='keyword-true'>TRUE</span> <span class='keyword-or'>or</span> <span class='keyword-false'>FALSE</span>)?"
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
    true    // Odgovor na deseto pitanje
];

function iducePitanje() {
    // Prikaži trenutnu pitanje
    iterator++;
    if (iterator > 9) { // Proveri da li je dostignut kraj pitanja
        iterator = 0; // Ponovo počni od prvog pitanja
        kraj();
    }
    document.getElementById("pitanje").innerHTML = questions[iterator];
    document.getElementById("broj").innerHTML = (iterator + 1) + ". ";
    if(good_answers >= 10)good_answers = 10;
    document.getElementById("brojTacnih").innerHTML = good_answers + "/10";

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
    alert("Quiz zavrsen! Dobio/la si " + good_answers + " od  10 tacnih odgovora.");    document.getElementById("tacno").disabled = true;
    document.getElementById("ne-tacno").disabled = true;
    document.getElementById("nextButton").disabled = true;
}

