const billetter=[];

function visBilletter(){
    let ut = "<table><tr>" + "<th>Navn</th><th>Adresse</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for(let p of billetter){
        ut+="<tr>";
        ut+="<td>" + p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billetter").innerHTML=ut;
}


function bestill() {
    const navn = document.getElementById("navn").value;
    const adresse = document.getElementById("adresse").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const personinfo = {
        navn: navn,
        adresse: adresse,
        telefonnr: telefonnr,
        epost: epost
    };

    billetter.push(personinfo);
    //nullstille inputboksene
    document.getElementById("navn").value="";
    document.getElementById("adresse").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
    visBilletter()}
