// création d'une liste de mots 
let words = ["pomme", "banane", "cerise", "noix", "ananas","éléphant","crocodile","chenille","chat","escargot"];

console.log(words);

// Création d'une fonction pour choisir un mot du tableau 

function randomword(words) {
   return words[Math.floor(Math.random() * words.length)];
}

// stocker le mot aléatoire dans une variable
let random = randomword(words);
console.log(random);



// découper le mot en tableau et stocker chaque lettre dans une variable 


let letters = random.split("");
// console.log(letters);

// compter le nombre d'élément dans letters

let count = letters.length;
console.log(count);

// créer un tableau dans la div grid
let grid = document.getElementById("grid")

let table = document.createElement("table");
grid.appendChild(table);


// création de 6 lignes pour chaque lettre tableau

for ( i = 0; i < 6; i++) {
    // console.log(i);
    let row = document.createElement("tr")
    row.setAttribute("id","try"+i)
    table.appendChild(row)
    for ( j = 0; j < letters.length; j++) {
        // console.log(j);
        let cell = document.createElement("td")
        cell.setAttribute("id","letter"+i+j)
        row.appendChild(cell)
        cell = letters[j]
    }
}


// Variable pour suivre la position de la lettre
let currentRow = 0;
let currentCol = 0;

// Sélectionner toutes les divs avec un attribut data-lettre
let lettreDivs = document.querySelectorAll('div[data-lettre]');

// Boucle à travers chaque div et ajout de l'écouteur d'événements
lettreDivs.forEach(div => {
    div.addEventListener('click', function() {
        // Récupérer la valeur de l'attribut data-lettre
        let lettre = div.getAttribute('data-lettre');
        console.log('Lettre cliquée :', lettre);
        //test pour voir si lettre récupère bien la valeur
/*         if ( lettre=== "_entree"){
            console.log("ENTER")
        } */

        // Remplir la case correspondante dans la ligne en cours
        if (currentCol < letters.length ) {  // S'assurer que la colonne ne dépasse pas la longueur du mot
            let cell = document.getElementById("letter" + currentRow + currentCol);
            cell.textContent = lettre;
            currentCol++; // Passer à la prochaine colonne
        }

        // Si la ligne est terminée, passer à la ligne suivante
        if (currentCol === letters.length) {
            currentRow++;
            currentCol = 0; // Réinitialiser la colonne pour la prochaine ligne
        }

        // Stopper si on a rempli les 6 lignes
/*         if (currentRow >= 6) {
            console.log("perdu")
        } */
        // Effacer la case précédente si on appuie sur effacer
        if (lettre === "_effacer") {
            currentCol--;
            let cell = document.getElementById("letter" + (currentRow + (currentCol-1)));
            cell.remove() ;
        }
    });
});


