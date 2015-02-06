function windComponents(rwy, windDirection, windSpeed) {
  var headOrTail, htSpeed, cwSpeed, lrCW;

  // remove ending letter from runway
  rwy = rwy.match(/\d{2}/)[0];
  // convert runway to degrees
  rwy = +rwy * 10;







  // Format of output:
  // "(Head|Tail)wind N knots. Crosswind N knots from your (left|right)."

  return makeMessage(headOrTail, htSpeed, cwSpeed, lrCW);
};

function makeMessage(headOrTail, htSpeed, cwSpeed, lrCW) {
  var message = "";

  if( htSpeed === 0 ) {
    message += headOrTail + " " + htSpeed + " knots. Crosswind " + cwSpeed + " knots from your " + lrCW + "."    
  } else {
    message += headOrTail + "wind " + htSpeed + " knots. Crosswind " + cwSpeed + " knots from your " + lrCW + "."
  }
  return message;
};

module.exports.windComponents = windComponents;
module.exports.makeMessage = makeMessage;