
// Écrire une fonction qui affiche dans la console de développement une case sur deux d’un tableau de reçu en paramètre.


function ft_print_half_array(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0){
          console.log(array[i]);
        }
      }
  }

ft_print_half_array([1,2,3,4,5,6]);
