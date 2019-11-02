function BinaryToNumeral( binaryString){
  var multiplier = 1;
  var result = 0;
  binaryString = String(binaryString);
  // console.log(binaryString.length);
  //jsdb version
  // writeln(binaryString.length);
  // writeln(binaryString.charAt(binaryString.length -1));
  for(var i =1; i<=binaryString.length; i++){
    if(binaryString.charAt(binaryString.length -i) == 1){
      result += multiplier;
      // console.log(result);
      writeln("result: "+result);
    }
    multiplier *=2;
  }
  return result;
}