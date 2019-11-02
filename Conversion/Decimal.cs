


namespace Conversion{
  public class Binary{
    public static BinaryToNumeral(string binaryString){
      int multiplier = 1;
      int result = 0;
      for(int i =1; i<=binaryString.Length; i++){
        if(binaryString[binaryString.Length -i] == 1){
          result += multiplier;
        }
        multiplier *=2;
      }
      return result;
    }//end static method 'BinaryToNumeral'
  }
}
