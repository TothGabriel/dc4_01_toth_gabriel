
// Écrire une fonction qui reçoit un tableau de chiffre en paramètre, qui ajoute plus un à la valeur de chaque cellule et qui affiche le tableau mis à jour.

function ft_print_update_array(array) {
    for (var i = 0; i < array.length; i++) {
       array[i] = array[i] + 1;
       console.log(array[i]);
      }
  }

ft_print_update_array([1,2,3,4,5,6]);
