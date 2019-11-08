//algorithm
function NumeralToOctet(numeral) {
  //verify valid argument
  if (remainder > 255) {
    return "value is not able to be turned into an octet";
  }

  //instance variables
  let currentDivider = 128;
  let binaryString = [];
  let remainder = numeral;

  //while( binaryString is not an octet)
  while (binaryString.length < 8) {
    if (
      remainder % currentDivider != remainder &&
      remainder % currentDivider >= 0
    ) {
      binaryString.push("1");
    } else {
      binaryString.push("0");
    }

    //leave only the remainder for the next iteration
    remainder %= currentDivider;
    //half the divider bc binary mutliplies by 2 for each power
    currentDivider /= 2;
  } //end while
  return binaryString;
} //end function
