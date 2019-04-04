Function romanConversion(number) {
  var Codes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["","M","MM","MMM"]];
  return(number.toString().split("").reverse().map((a,b)=>Codes[b++][a]).reverse().join(""))}
  