function windComponents(rwy, windDirection, windSpeed) {
  var headOrTail = "Head"
  var htSpeed = 0;
  var cwSpeed = 0;
  var lrCW = 'right';
  var difference = 0;

  // remove ending letter from runway
  // idealy, rwy should always have two numbers, single digits like 02C
  rwy = rwy.match(/\d{1,2}/)[0];
  // convert runway to degrees
  rwy = +rwy * 10;

  difference = rwy - windDirection;

  // subtract direction of travel and wind direction
  // if the (absolute) difference is greater than 90
  if( Math.abs( difference ) > 90 ) {
    // flip the runway direction
    difference = flipRunway( rwy ) - windDirection;

    // it's a tailwind
    headOrTail = "Tail";
  }

  // calculate head/tailwind
  htSpeed = Math.cos( Math.abs(difference) * (Math.PI / 180)  ) * windSpeed;
  htSpeed = Math.round(htSpeed);

  // calculate crosswind
  cwSpeed = Math.sin( Math.abs(difference) * (Math.PI / 180)  ) * windSpeed;
  cwSpeed = Math.round(cwSpeed);

  // determine if left or right
  if( cwSpeed !== 0 && windDirection < rwy && windDirection > flipRunway(rwy) ) {
    lrCW = 'left';
  }

  // Format of output:
  // "(Head|Tail)wind N knots. Crosswind N knots from your (left|right)."

  return makeMessage(headOrTail, htSpeed, cwSpeed, lrCW);
};

var flipRunway = function(runwayDegrees) {
  if( runwayDegrees >= 180 ) {
    return runwayDegrees - 180;
  } else {
    return runwayDegrees + 180;
  }
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