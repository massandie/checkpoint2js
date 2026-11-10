
// 1. FONCTIONS DE MANIPULATION DE CHAÎNES


// Exercice 1 : Inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
}

console.log("1. Inversion :", inverserChaine("Bonjour"));


// Exercice 2 : Compter les caractères
function compterCaracteres(chaine) {
    return chaine.length;
}

console.log("2. Nombre de caractères :", compterCaracteres("JavaScript"));


// Exercice 3 : Mettre les premières lettres en majuscules
function mettreEnMajuscules(phrase) {
    return phrase
        .split(" ")
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(" ");
}

console.log("3. Majuscules :", mettreEnMajuscules("bonjour tout le monde"));



// 2. FONCTIONS SUR LES TABLEAUX


// Exercice 4 : Trouver le maximum
function trouverMaximum(tableau) {
    if (tableau.length === 0) {
        return "Le tableau est vide";
    }

    return Math.max(...tableau);
}

// Trouver le minimum
function trouverMinimum(tableau) {
    if (tableau.length === 0) {
        return "Le tableau est vide";
    }

    return Math.min(...tableau);
}

let nombres = [15, 8, 25, 3, 40, 12];

console.log("4. Maximum :", trouverMaximum(nombres));
console.log("   Minimum :", trouverMinimum(nombres));


// Exercice 5 : Calculer la somme d'un tableau
function sommeTableau(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}

console.log("5. Somme :", sommeTableau([10, 20, 30, 40]));


// Exercice 6 : Filtrer un tableau
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

let nombresFiltres = [5, 12, 8, 20, 3, 15];

console.log(
    "6. Nombres supérieurs à 10 :",
    filtrerTableau(nombresFiltres, nombre => nombre > 10)
);



// 3. FONCTIONS MATHÉMATIQUES


// Exercice 7 : Calculer la factorielle
function factorielle(nombre) {
    if (!Number.isInteger(nombre) || nombre < 0) {
        return "Nombre invalide";
    }

    let resultat = 1;

    for (let i = 1; i <= nombre; i++) {
        resultat *= i;
    }

    return resultat;
}

console.log("7. Factorielle de 5 :", factorielle(5));


// Exercice 8 : Vérifier si un nombre est premier
function estPremier(nombre) {
    if (!Number.isInteger(nombre) || nombre <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("8. 7 est premier :", estPremier(7));
console.log("   9 est premier :", estPremier(9));


// Exercice 9 : Générer la suite de Fibonacci
function fibonacci(nombre) {
    if (!Number.isInteger(nombre) || nombre < 0) {
        return "Nombre invalide";
    }

    let suite = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < nombre; i++) {
        suite.push(a);

        let suivant = a + b;
        a = b;
        b = suivant;
    }

    return suite;
}

console.log("9. Suite de Fibonacci :", fibonacci(10));
