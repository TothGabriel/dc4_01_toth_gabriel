
// Écrire une fonction qui ﬁltre tous les nombres impairs d’un tableau. Affichez le résultat dans la console de développement


function ft_print_filter_array(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 != 0){
        console.log(array[i]);
      }
      }
  }

ft_print_filter_array([1,2,3,4,5,6,7,8,9]);
