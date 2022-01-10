const tab = [];
let cpt = 0;

let nbrCompte = document.getElementById('nbr_compte');

let result = document.getElementById('resultat');

function ajouter (){
    let nom = document.getElementById('name').value;
    let prenom = document.getElementById('first_name').value;
    let login = document.getElementById('login').value;
    let mdp = document.getElementById('mdp').value;

  
    tab.push([nom, prenom, login, mdp]);

    result.innerHTML = "<p>Nom : " + tab[cpt][0] + " Prénom : " + tab[cpt][1] + " Login : " + tab[cpt][2] + " Mot de passe : " + tab[cpt][3]+"</p>";
    cpt++;
    console.log(nom);
}

