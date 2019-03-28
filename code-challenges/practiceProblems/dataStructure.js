'use strict';

// - '{"names":["edgar", "allen", "poe"]}
// - '[1,2,3,4,5]'
// - 'name_lena:name_adam:name_ilya'
// - '[1, 2],[3,4], [5,6] ,[7,8]'

function convertString(str){
  let names = str.replace(/^{"(\w+)":\["(\w+)", "(\w+)", "(\w+)"]}/, '$1: $2 $3 $4');
  // console.log(names);

  let newNamesArr = str.replace(/^{"(\w+)":\["(\w+)", "(\w+)", "(\w+)"]}/, ['$2', '$3', '$4']);
  // console.log('newNamesArr', newNamesArr);

  let namesArr = str.replace(/{"\w+":/g, '').replace(/}$/g, '').replace(/\[/g, '').replace(/\]/g, '').replace(/,/g, '').split(' ');
  // console.log(namesArr);

  // for(let i = 0; i<namesArr.length; i++){
  //   console.log('name: '+namesArr[i]);
  // }
}

function convertJSON(str){
  try{
    let parsing = JSON.parse(str);
    let nameStr = 'name: ';

    for (let names in parsing) {
      nameStr += parsing[names];
    }

    let fullName = nameStr.replace(/,/g, ' ');
    // console.log(fullName);

    const namesArr = Object.values(parsing);
    
    namesArr[0].forEach(name => {
      // console.log('name: '+name);
    });
  } catch(error) {
    console.error(error);
  }
}

function strToArray(str){
  let newArr = [];
  let result = str.replace(/[\[\],]/g, '');
  console.log(result);

  for(let i = 0; i<result.length; i++){
    newArr.push(Number(result[i]));
  }

  return newArr;
}

console.log(strToArray('[1,2,3,4,5]'));

// convertJSON('{"names":["edgar", "allen", "poe"]}');

// - '[1,2,3,4,5]'
// - 'name_lena:name_adam:name_ilya'
// - '[1, 2],[3,4], [5,6] ,[7,8]'

