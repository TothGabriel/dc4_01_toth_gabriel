
// Écrire une fonction qui insert dans un tableau un nombre reçu en paramètre dans l’ordre croissant. Le tableau de référence sera le suivant :



function ft_insert_number(nb) {
    let tab = [0,1,2,3,4,5,6,7,8,9];
    var i = 0;
    while (i < tab.length && nb > tab[i]) {
      i++;
    }
    tab.splice(i, 0, nb);
    console.log(tab);
  }

ft_insert_number(12);
