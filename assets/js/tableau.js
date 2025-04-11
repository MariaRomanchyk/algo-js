let nombres = [5, 1, 8, 3, 2];
triABulles(nombres);
console.log(nombres);

function triABulles(tableau){
    let len = tableau.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (tableau[j] > tableau[j + 1]) {
            let temp = tableau[j];
            tableau[j] = tableau[j + 1];
            tableau[j + 1] = temp;
          }
        }
      }    
      return tableau;
    }

