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

// Sélectionner toutes les divs avec un attribut data-lettre
let lettreDivs = document.querySelectorAll('div[data-lettre]');


// Sélectionner toutes les divs avec un attribut data-lettre
let lettreDivs = document.querySelectorAll('div[data-lettre]');
let chosenletter = "";
// Boucle à travers chaque div et ajout de l'écouteur d'événements
lettreDivs.forEach(div => {
    div.addEventListener('click', function() {
        // Récupérer la valeur de l'attribut data-lettre
        let lettre = div.getAttribute('data-lettre');
<<<<<<< HEAD
        
        // Faire quelque chose avec la lettre, 
        console.log('Lettre cliquée :', lettre);
    });
});
=======
        chosenletter = lettre;
        console.log('Lettre cliquée :', lettre);
    });
});
 
// Fonction pour ajouter les lettres dans le tableau et s'arrêter à la dernière case
for ( x=0; x<6 ; x++ ) {
let tryx = document.getElementById('try'+x);
for ( j = 0; j < count; j++) {
    let tdletter = document.getElementById('letter'+x+j);
    console.log(tdletter) ;
    if (tdletter && chosenletter) {
        tdletter.textContent = chosenletter; 
    }
}

}


>>>>>>> 9513e1aa41b779d94f9850ab8986269a1bd746fc

