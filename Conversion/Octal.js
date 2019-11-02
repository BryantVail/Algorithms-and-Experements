function OctalToNumeral(octalString){

  var multiplier = 1;
  var value = 0;
  octalString  = String(octalString);
  writeln(octalString.charAt(octalString.length -1));

  for(var i =1; i<= octalString.length; i++){
    if(octalString.charAt(octalString.length - i) <= 8 ){
      value += (multiplier * octalString.charAt(octalString.length -i)); 
    }
    multiplier *= 8;
  }
  return value;
}