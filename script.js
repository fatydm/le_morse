

// Étape 1 
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. 
// Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

// Méthode PUSH
// function getLatinCharacterList(text) {
//     let textTab = []
//     for (let x of text) {
//         textTab.push(x)
//     }
//     return textTab
// }
// console.log(getLatinCharacterList('Hello World !'));

function getLatinCharacterList(str) {
    const letters = str.split('')
    return letters
}

// Étape 2
// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

function translateLatinCharacter(letter) {
    if (latinToMorse[letter.toUpperCase()]) {
        return latinToMorse[letter.toUpperCase()] || '';
    }
}
console.log(translateLatinCharacter('f'))

// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1,
// pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(text) {
    const textToTranslate = getLatinCharacterList(text);
    let resulatTranslated = textToTranslate.map(translateLatinCharacter).join(' ');

    // for (let i = 0; i < textToTranslate.length; i++) {
    //     resulatTranslated += translateLatinCharacter(textToTranslate[i]) + ' ';
    // }
    return resulatTranslated.trim()
}

// Étape 4 
// Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. 
// Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

// Je récupère mon tableau de lettre Morse
function getMorseCharacterList(str) {
    const morseLetters = str.split(' ')
    return morseLetters
}
//console.log(getMorseCharacterList('... --- ...'));

// Cette fonction me permet de changer mon caractère 'lettre' en 'morse'
function translateMorseCharacter(letter) {
    if (morseToLatin[letter]) {
        return morseToLatin[letter] || 'Cette lettre n\'existe pas';
    }
}
//console.log(translateMorseCharacter('...'))

// Dans cette fonction, je veux qu'une fois que mon mot en morse est écrit, 
// il me change chaque lettre de la chaine de caractère en lettre latin
function decode(textMorse) {
    const textToTranslateMorse = getMorseCharacterList(textMorse);
    let translatedInLatin = textToTranslateMorse.map(translateMorseCharacter).join('');

    // for (let i = 0; i < textToTranslateMorse.length; i++) {
    //     translatedInLatin += translateMorseCharacter(textToTranslateMorse[i])
    // }
    return translatedInLatin.trim()
}
console.log(decode('... --- ... / . / ...'));



const submitBtnToMorse = document.getElementById('submitBtnMorse')
const submitBtnToLatin = document.getElementById('submitBtnLatin')
const inputMorseValue = document.getElementById('morseTranslation')
const inputLatinValue = document.getElementById('latinTranslation')
const divMorse = document.querySelector('.toMorse')
const divLatin = document.querySelector('.toLatin')

// Traduire du Latin au Morse
submitBtnToMorse.addEventListener('click', () => {
    console.log("coucou", inputLatinValue.value);

    if (inputMorseValue.value.trim() !== "") {
        let translatedTextInMorse = encode(inputMorseValue.value);

        let paragraphMorse = document.createElement('p')
        paragraphMorse.classList('paraStyle')
        paragraphMorse.innerText = translatedTextInMorse;
        divMorse.appendChild(paragraphMorse);
    }

})

// Traduire du Morse au Latin
submitBtnToLatin.addEventListener('click', () => {

    if (inputLatinValue.value.trim() !== "") {
        let translatedTextInLatin = decode(inputLatinValue.value)

        let paragraphlatin = document.createElement('p')
        paragraphlatin.classList('paraStyle')
        paragraphlatin.innerText = translatedTextInLatin
        divLatin.appendChild(paragraphlatin);
    }
})



