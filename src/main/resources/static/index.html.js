const billetter=[];

function visBilletter(){
    let ut = "<table><tr>" + "<th>Navn</th><th>Adresse</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for(let p of visBilletter){
        ut+="<tr>";
        ut+="<td>" + p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billetter").innterHTML=ut;
}


function bestill(){
    const navn = document.getElementById("navn").value;
    const adresse =
}


