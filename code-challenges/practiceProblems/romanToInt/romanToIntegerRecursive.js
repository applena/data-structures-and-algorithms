'use strict';
function romanToIntRecursive(roman){

  let temp = 0;

  const _romanToIntRecursive = (roman) => {
    if(roman.length>0){
      if(roman[0] === 'M'){
        temp = temp + 1000;
        //console.log('temp is ', temp);
        _romanToIntRecursive(roman.substr(1, roman.length));
      }
  
      if(roman[0] === 'D'){
        temp = temp + 500;
        // console.log('temp is ', temp);
        _romanToIntRecursive(roman.substr(1, roman.length));
      }
  
      if(roman[0] === 'C'){
        if(roman[1] === 'D'){
          temp = temp + 400;
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(2, roman.length));
        } else if(roman[1] === 'M'){
          temp = temp + 900;
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(2, roman.length));
        } else {
          temp = temp + 100;
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(1, roman.length));
        }
      }
  
      if(roman[0] === 'L'){
        temp = temp + 50;
        // console.log('temp is ', temp);
        _romanToIntRecursive(roman.substr(1, roman.length));
      }
  
      if(roman[0] === 'X'){
        if(roman[1] === 'L'){
          temp = temp + 40;
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(2, roman.length));
        } else if(roman[1] === 'C'){
          temp = temp + 90;
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(2, roman.length));
        } else {
          temp = temp + 10;
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(1, roman.length));
        }
      }
  
      if(roman[0] === 'V'){
        temp = temp + 5;
        // console.log('temp is ', temp);
        _romanToIntRecursive(roman.substr(1, roman.length));
      }
  
      if(roman[0] === 'I'){
        if(roman[1] === 'V'){ 
          temp = temp + 4; 
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(2, roman.length)); 
        } 
        else if(roman[1] === 'X'){ 
          temp = temp + 9; 
          // console.log('temp is ', temp);
          _romanToIntRecursive(roman.substr(2, roman.length), temp); 
        } else {
          temp = temp + 1;
          // console.log('temp is ', temp);
          // console.log('roman.length is ', roman.length);
          // console.log('roman substring is ', roman.substr(1, roman.length));
          _romanToIntRecursive(roman.substr(1, roman.length));
        }
      }
    } 
    return temp;
  };

  _romanToIntRecursive(roman);
  return temp;
}

console.log(romanToIntRecursive('III', 0));
console.log(romanToIntRecursive('IV', 0));
console.log(romanToIntRecursive('LVIII', 0));
console.log(romanToIntRecursive('MCMXCIV', 0));