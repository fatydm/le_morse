
const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    ' ': '',
    '/': ' '

}

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
        return latinToMorse[letter.toUpperCase()];
    }
}
console.log(translateLatinCharacter('f'))

// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1,
// pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(text) {
    const textToTranslate = getLatinCharacterList(text);

    let resulatTranslated = "";

    for (let i = 0; i < textToTranslate.length; i++) {
        resulatTranslated += translateLatinCharacter(textToTranslate[i]);
    }
    return resulatTranslated
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
    
    let translatedInLatin = "";

    for (let i = 0; i < textToTranslateMorse.length; i++) {
        translatedInLatin += translateMorseCharacter(textToTranslateMorse[i])
    }
    return translatedInLatin
}
console.log(decode('... --- ... / . / ...'));

