// Frontend UI
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    
    var number = $("#userinput").val();
    var Codes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["","M","MM","MMM"]]
    
    function backwards(number) {
      return number.toString().split("").reverse()
    }
    function callroman(backwards) {
    return backwards.map((x.y)=>Codes[y++][x]).reverse().join(""))
    }
   function callroman(backwards) {
   return backwards.map((x,y) Codes[y++][x])
   }
   function final (callroman){
    return callroman.reverse().join("")
    
    });
    // $("#result").text(result);
    });
  });
  
    //function callroman(backwards)
  //  return backwards.map((x.y)=>Codes[y++][x]).reverse().join(""))