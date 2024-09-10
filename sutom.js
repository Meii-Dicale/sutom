// création d'une liste de mots 
let words = ["pomme", "banane", "cerise", "noix", "ananas"];

// création d'une fonction pour générer un mot aléatoire


function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

