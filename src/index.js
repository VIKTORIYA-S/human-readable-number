module.exports = function toReadable (number) {
  const firstTenNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const secondTen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';
  let numberStr = String(number).split('');
  if (number == undefined) {
    console.log([]);
    return result;
  }
  else if (number >= 0 && number <= 10) {
    result = firstTenNumbers[number];
console.log(firstTenNumbers[number]);
    return result;
}
else if (number >= 10 && number <= 19) {
  result = secondTen[number - 11];
  console.log(secondTen[number - 11]);
      return result;
}
 else if (number%10 === 0 && number < 100) {
  result = tens[number / 10 - 2];
console.log(tens[number / 10 - 2]);
    return result;
}
else if (number >= 21 && number < 100) {
 result = `${tens[String(number)[0] - 2]} ${firstTenNumbers[String(number).slice(-1)]}`;
 console.log(result);
     return result;
}
// else if (number === 100) {
//   result = 'One hundred'
//   console.log('One hundred');
//     return result;
// }
else if (number%100 === 0 && number < 1000) {
  result = `${firstTenNumbers[number/100]} hundred`;
console.log(result);
    return result;
}
else if ( number%10 !== 0) {
  result = `${firstTenNumbers[String(number)[0]]} hundred ${tens[String(number)[1] - 2]} ${firstTenNumbers[String(number).slice(-1)]}`;
  console.log(result);
  if ((`${tens[String(number)[1] - 2]}` === 'undefined')) {
    result = `${firstTenNumbers[String(number)[0]]} hundred ${firstTenNumbers[String(number).slice(-1)]}`;
    console.log(result);
    return result;
  }
    return result;
}
else if (number > 100 && number < 1000 && number%10 === 0) {
  result = `${firstTenNumbers[String(number)[0]]} hundred ${tens[String(number)[1] - 2]}`;
  console.log(result);
       return result;
}
}
