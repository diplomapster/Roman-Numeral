// Frontend UI
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();

    var number = $("#userinput").val();
  //var number = parseInt($("#userinput").val());
    
    
    // Backend Logic  
    function result(number) {
    var result = "";
    var arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
        for (var i = 0; i <= arabicArray.length; i++){
          while (number%arabicArray[i] < number) {
            result += romanArray[i];
            number -= arabicArray[i];
          }
        }
        $("#result").text(i);
      }
    });
  });