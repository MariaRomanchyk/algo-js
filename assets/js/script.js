function addition (number1, number2){
    let add = number1 + number2;
    return add;
}
function soustraction (number1, number2){
    let sou = number1 - number2;;
    return sou;
}
function multiplication (number1, number2){
    let mul = number1 * number2;
    return mul;
}
function division (number1, number2){
    if (number2 === 0) {
        return "Faut ! Vous ne pouvez pas diviser par 0 !";
      }
    let div = number1 / number2;
    return div;
}

let continuer = true;
while (continuer) {
    let number1 = Number(prompt("Tapez le premier nombre :"));
    console.log("Entrez le premier nombre :" + number1);
    let number2 = Number(prompt("Tapez le deuxième nombre :"));
    console.log("Entrez le second nombre : " + number2);
    if (isNaN(number1) || isNaN(number2)) {
        console.log("Erreur : vous devez entrer des nombres !");
        continue;
    }

    let menu = prompt(
        "Quelle opération veux-tu faire ?\n" +
        "1 - Addition\n" +
        "2 - Soustraction\n" +
        "3 - Multiplication\n" +
        "4 - Division\n" +
        "5 - Quitter"
    );

    if (menu !== "1" && menu !== "2" && menu !== "3" && menu !== "4" && menu !== "5") {
        console.log("Option invalide. Veuillez choisir entre 1 et 5.");
        continue;  
    }
    
    if(menu === "1"){
        console.log("Résultat : " + addition(number1, number2));
    } else if (menu === "2"){
        console.log("Résultat : " + soustraction(number1, number2));
        
    } else if(menu === "3"){
        console.log("Résultat : " + multiplication(number1, number2));
        
    } else if(menu === "4"){
        console.log("Résultat : " + division(number1, number2));
        
    } else if (menu === "5") {
        console.log("Merci ! À la prochaine fois !");
        continuer = false;
    } else {
        console.log("Option invalide. Veuillez choisir entre 1 et 5.");
    }
}