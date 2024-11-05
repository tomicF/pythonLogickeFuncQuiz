let iterator = -1;
let good_answers = 0;


const questions = [
    "Da li je izraz True and False jednak True ili False?",
    "Šta će biti rezultat izraza False or True?",
    "Da li je izraz not True jednak True ili False?",
    "Šta će biti rezultat izraza True or False and False?",
    "Da li je izraz not (False or True) jednak True ili False?",
    "Šta će biti rezultat izraza True and True or False?",
    "Da li je izraz not (True and False) jednak True ili False?",
    "Šta će biti rezultat izraza False and (not True)?",
    "Da li je izraz not (not False) jednak True ili False?",
    "Šta će biti rezultat izraza True and (True or False)?"
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
    alert("Quiz finished! You got " + good_answers + " out of 10 correct.");
    document.getElementById("tacno").disabled = true;
    document.getElementById("ne-tacno").disabled = true;
    document.getElementById("nextButton").disabled = true;
}

