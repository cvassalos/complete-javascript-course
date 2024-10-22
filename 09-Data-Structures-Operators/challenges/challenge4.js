const camelCase = function(name) {
  const nameArray = name.split('_');
  const camelArray = [];
  for(word of nameArray) {
    camelArray.push(word.replace(word[0], word[0].toUpperCase()));
  }
  const finalArray = camelArray.join('');
  const finalName = finalArray[0].toLowerCase() + finalArray.slice(1);
  console.log(finalName);
}


camelCase('this_is_a_test_case');
