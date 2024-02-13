
const billetter=[];




function visBilletter(){
    let ut = "<table><tr>" + "<th>Film</th><th>Antall billetter</th><th>Navn</th><th>Adresse</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for(let p of billetter){
        ut+="<tr>";
        ut+="<td>" + p.film+"</td><td>"+p.antall+"</td><td>" + p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("visAlleBilletter").innerHTML=ut;
}



function bestill() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const navn = document.getElementById("navn").value;
    const adresse = document.getElementById("adresse").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;



    const personinfo = {
        film : film,
        antall : antall,
        navn : navn,
        adresse : adresse,
        telefonnr : telefonnr,
        epost : epost
    };

    billetter.push(personinfo);
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("navn").value="";
    document.getElementById("adresse").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
    visBilletter()
}

function velgFilm(){
    ut+= "FilmValg:" + document.getElementById("film").value;
    }

function antall(){
    document.getElementById("antall").value;
}


function slettBilletter(){
    billetter.length=0;
    document.getElementById("visAlleBilletter").innerHTML="Billettene er nå slettet";
}












