'use strict';

function multiBracketValidation(input){
  if(arguments.length !== 1){throw 'you must enter an input string';}
  if(typeof input !== 'string'){throw 'you must enter a string';}

  let roundCount = 0;
  let squareCount = 0;
  let curlyCount = 0;

  for (let i = 0; i < input.length; i++){
    if(roundCount < 0 || squareCount < 0 || curlyCount < 0){
      return false;
    } 
    
    switch(input[i]){
    case '(':
      roundCount++;
      break;
    case '[':
      squareCount++;
      break;
    case '{':
      curlyCount++;
      break;
    case ')':
      roundCount--;
      break;
    case ']':
      squareCount--;
      break;
    case '}':
      curlyCount--;
      break;
    default:
      break;
    }
  }
  if(roundCount === 0 && squareCount === 0 && curlyCount === 0){
    return true;
  }
}

module.exports = multiBracketValidation;
