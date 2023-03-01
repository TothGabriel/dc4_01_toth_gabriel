
// Écrire une fonction qui affiche l’alphabet en majuscule, une string contenant l’alphabet en 
// minuscule sera passée en paramètre la fonction. Chaque lettre devra être stockée dans une cellule 
// du tableau.

function displayAlphabet(string) {
    var alphabet = string.split('');
    for (var i = 0; i < alphabet.length; i++) {
        var codeascii = alphabet[i].charCodeAt(0) - 32;
        var lettremaj = String.fromCharCode(codeascii);
        alphabet[i] = lettremaj;
        console.log(alphabet[i]);
      }
  }

displayAlphabet('abcdefghijklmnopqrstuwxyz');
