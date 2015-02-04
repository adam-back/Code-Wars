var decodeMorse = function(morseCode) {
  // remove white spaces at the start of the string
  // remove white space at the end of the string
  var message = '';

  // separate input by words (three spaces)

  // loop through words
    // separate word into characters (one space)
    
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