const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arr = [];

    for (let i = 0; i < expr.length; i += 10) {

        let letter = expr.slice(i, i + 10)

        let word = [];

        for (let j = 0; j < 10; j += 2) {

            let ltr = letter.slice(j, j + 2)

            ltr == '11' && word.push('-');
            ltr == '10' && word.push('.');
            ltr == '**' && word.push('**');

        }

        arr.push(word)
    }
    arr = arr.map(el => el.join('')).map(el => el == '**********' ? el = ' ' : el = MORSE_TABLE[el])
    return arr.join('');
}

module.exports = {
    decode
}