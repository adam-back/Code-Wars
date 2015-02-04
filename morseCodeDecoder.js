var decodeMorse = function(morseCode) {
  // remove white spaces at the start of the string
  if(morseCode.search(/\s+/) === 0) {
    morseCode = morseCode.replace(/\s+/, '');
  }
  
  // remove white space at the end of the string
  morseCode = morseCode.replace(/\s+$/, '');

  console.log('white-spaceless morse: ', morseCode );
  var message = '';
  var words = [];

  // separate input by words (three spaces)
  // while( morseCode.search(/(\s){3}/) ) {
  //   words.push( morseCode.substring(0, morseCode.search(/(\s){3}/)) );
  //   // then remove the word
  //   morseCode = morseCode.substring(morseCode.search(/(\s){3}/));
  //   // remove space at the start
  //   morseCode = morseCode.replace(/\s+/, '');
  // }

  // There should be one word left over
  words.push(morseCode);

  // loop through words
  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    // separate word into characters (one space)
    var characters = word.match(/(\S){1,}/g);
    
    // loop through characters
    for (var i = 0; i < characters.length; i++) {
      // translate character to english, add to message
      message += MORSE_CODE[characters[i]];
    };

    // add space after word 
    message += " ";
  };

  // remove last space
  message = message.substring(0, message.length - 1);

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