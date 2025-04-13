
function estPalindrome(mot) {
    let motEnMinuscule = mot.toLowerCase();  
    let motInverse = motEnMinuscule.split('').reverse().join('');
    
    if(motEnMinuscule === motInverse) {
      return true;
    } else {
      return false;
    }
  }
  let motSaisi = prompt("Entrez le mot à vérifier sur le palindrome:");

  console.log(estPalindrome(motSaisi));