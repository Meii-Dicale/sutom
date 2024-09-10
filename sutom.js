// création d'une liste de mots 
let words = ["pomme", "banane", "cerise", "noix", "ananas"];

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
console.log(letters);


