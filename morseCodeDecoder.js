var decodeMorse = function(morseCode) {
  // remove white spaces at the start of the string
  morseCode = morseCode.replace(/\s+/, '');
  // remove white space at the end of the string
  morseCode = morseCode.replace(/\s+$/, '');

  var message = '';

  // separate input by words (three spaces)
  /(\s){3}/

  // loop through words
    // separate word into characters (one space)
    var characters = morseCode.match(/(\S){1,}/g);
    
    // loop through characters
      // translate character to english, add to message

    // add space after word 


  // remove last space

  // return english string
  return message;
};

var MORSE_CODE = { '-.-.--': '!',
                    '.-..-.': '"',
                    '...-..-': '$',
                    '.-...': '&',
                    '.----.': '\'',
                    '-.--.': '(',
                    '-.--.-': ')',
                    '.-.-.': '+',
                    '--..--': ',',
                    '-....-': '-',
                    '.-.-.-': '.',
                    '-..-.': '/',
                    '-----': '0',
                    '.----': '1',
                    '..---': '2',
                    '...--': '3',
                    '....-': '4',
                    '.....': '5',
                    '-....': '6',
                    '--...': '7',
                    '---..': '8',
                    '----.': '9',
                    '---...': ':',
                    '-.-.-.': ';',
                    '-...-': '=',
                    '..--..': '?',
                    '.--.-.': '@',
                    '.-': 'A',
                    '-...': 'B',
                    '-.-.': 'C',
                    '-..': 'D',
                    '.': 'E',
                    '..-.': 'F',
                    '--.': 'G',
                    '....': 'H',
                    '..': 'I',
                    '.---': 'J',
                    '-.-': 'K',
                    '.-..': 'L',
                    '--': 'M',
                    '-.': 'N',
                    '---': 'O',
                    '.--.': 'P',
                    '--.-': 'Q',
                    '.-.': 'R',
                    '...': 'S',
                    '-': 'T',
                    '..-': 'U',
                    '...-': 'V',
                    '.--': 'W',
                    '-..-': 'X',
                    '-.--': 'Y',
                    '--..': 'Z',
                    '..--.-': '_',
                    '...---...': 'SOS' };

module.exports.decodeMorse = decodeMorse;