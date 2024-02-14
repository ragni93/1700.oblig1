// opprettet tomt array som billettene skal legges inn i
const billetter=[];



//funksjon for å presentere arrayet med billettene i
function visBilletter(){
    let ut = "<table><tr>" + "<th>Film</th><th>Antall billetter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for(let p of billetter){
        ut+="<tr>";
        ut+="<td>" + p.film+"</td><td>"+p.antall+"</td><td>" + p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }


    //Plasserer arrayet <div>-tagg i index.html der arrayet med billettene blir presentert
    document.getElementById("visAlleBilletter").innerHTML=ut;
}



function bestill() {
    // valideringsfeil-boolean for å få if-setningene riktig og at feilmeldinger skal slettes
    // når man fortsetter å fylle ut
let valideringsfeil = false;



    // Funksjon som tar det man skriver inn i input-feltene og knytter til const-variabler
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;


    // valideringsjekk med if-setninger. Booleanen nederst i hver hindrer billettene å registreres
    // om inputen ikke er gyldig
    if (film==="Velg din film"){
        document.getElementById("feilFilm").innerHTML = "Feil, velg en film."
        valideringsfeil=true;
    }
    if (isNaN(antall) || antall < 1) {
        document.getElementById("feilAntall").innerHTML = "Feil, velg antall billetter."
        valideringsfeil=true;
    }
    if (fornavn.trim() === " ") {
        document.getElementById("feilFornavn").innerHTML = "Feil, ugyldig fornavn.";
        valideringsfeil=true;
    }
    if (etternavn.trim() === " ") {
        document.getElementById("feilEtternavn").innerHTML = "Feil, ugyldig etternavn.";
        valideringsfeil=true;
    }
    if (isNaN(telefonnr) || telefonnr.trim() === "") {
        document.getElementById("feilTelefonnr").innerHTML = "Feil, ugyldig telefonnr.";
        valideringsfeil=true;
    }
    if (epost.trim() === "" || !/\S+@\S+\.\S+/.test(epost)) {
        document.getElementById("feilEpost").innerHTML = "Feil, ugyldig eller manglende e-post.";
        valideringsfeil=true;
    }

    // if-setning hvor booleanen fra valideringen avgjør om funksjonen kan fortsette og lagre og vise billettene
    // oppretter et objekt som lagrer all input-infoen
    if(!valideringsfeil) {
        const personinfo = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        // Flytter opbjektet inn i arrayet som ble opprettet øverst i filen
        billetter.push(personinfo);

        // Tømmer skrivefeltene når billetene vises under
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";


        // Bestill-funksjonen avsluttes med at VisBilletter-funksjonen kjøres
        visBilletter()



        // Tømmer feilmeldinger når de er blitt rettet opp i
        document.getElementById("feilFilm").innerHTML = "";
        document.getElementById("feilAntall").innerHTML = "";
        document.getElementById("feilFornavn").innerHTML = "";
        document.getElementById("feilEtternavn").innerHTML = "";
        document.getElementById("feilTelefonnr").innerHTML = "";
        document.getElementById("feilEpost").innerHTML = "";
    }
}


// funksjon for å velge film
let ut="";
function velgFilm(){
    ut+= "FilmValg:" + document.getElementById("film").value;
    }


 // funksjon for å velge antall
function antall(){
    document.getElementById("antall").value;
}

//funksjon for slett-billetter-knappen. Arrayet tømmes.
function slettBilletter(){
    billetter.length=0;
    document.getElementById("visAlleBilletter").innerHTML="Billettene er nå slettet";
}












