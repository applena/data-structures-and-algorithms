function calc(str){
  str = str.replace(/\s+/g, '');
  str = str.replace(/(\d)\(/g, '$1*(');
  console.log('calc', str);
  //find the first thing we want to act on ()
  //regex search the string for a () set
  let parenMatches = str.match(/\([^\)\(]*\)/g);

  if(parenMatches){
    parenMatches.forEach(paren => {
      let answer = calc(paren.replace('(', '').replace(')', ''));
      str = str.replace(paren, answer);
      console.log('paren', paren, answer, str);
      // replace the paren string with the result of calc / value of that paren
      // for example: paren = (3^6). When we pass that into calc, it will be 729
    });
  }
  
  //search for unary
  // if matches, solve it in place and replace it
  str = str.replace('--', '+');

  // ^, *, /, +. - operations
  let operations = {
    '^':{
      reg: /[\d.]+\^-?[\d.]+/g,
      fn: (num1, num2)=>Math.pow(num1, num2),
    },
    '*':{
      reg: /[\d.]+\*-?[\d.]+/g,
      fn: (num1, num2) => num1 * num2,
    },
    '/':{
      reg: /[\d.]+\/-?[\d.]+/g,
      fn: (num1, num2) => num1/num2,
    },
    '+':{
      reg: /[\d.]+\+-?[\d.]+/g,
      fn: (num1, num2) => num1 + num2,
    },
    '-': {
      reg: /[\d.]+-[\d.]+/g,
      fn: (num1, num2) => num1 - num2,
    },
  };

  for(let operator in operations){
    let reg = operations[operator].reg;
    let matches = str.match(reg);
    if(matches){
      matches.forEach(result => {
        let array = result.split(operator);
        let answer =  operations[operator].fn(Number(array[0]), Number(array[1]));
        str = str.replace(result, answer);
        console.log(operator, result, answer, str);
      });
    }
  }
  
  // strip off leading '+'
  str = str.replace(/^\+/, '');

  // if we didn't solve all the problems - aka nested problems - it would get caught here and run again

  let normalizeString = (str.replace(/\./g, '').replace(/^-/, ''));
  console.log('normalizze String', normalizeString);
  if((/\D/).test(normalizeString)){
    console.log('continuing to parse', str);
    return calc(str);
  }
  console.log(str);
  return Number(str).toFixed(5);
}


// console.log(calc('(3^6)*2+(6-1)*3/2--1'));
// console.log(calc('729*2+5*3/2--1'));
// console.log(calc('--3^2'));
// console.log(calc('(+3^2)^2+4--1'));
// console.log(calc('(2.16 - 48.34)^-1'));
console.log(calc('(2.16(4*2.1) - 48.34)^-1'));