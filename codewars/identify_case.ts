function id(c_str) {
  const regexPairs = [
    {
      name: 'kebab',
      regex: new RegExp(/(^[a-z])([a-z]+-{1})+([a-z])+$/)
    },
    {
      name: 'camel',
      regex: new RegExp(/(^[a-z])([a-z]+[A-Z]{1})+([a-z])+$/)
    },
    {
      name: 'snake',
      regex: new RegExp(/(^[a-z])([a-z]+_{1})+([a-z])+$/)
    },
  ];
  
  for (const pair of regexPairs) {
    const testResult = pair.regex.test(c_str).valueOf();
    
    if (testResult) {
      return pair.name;
    }
  }
  
  return 'none';
};

const testValues = ['snake_case', 'camelCase', 'kebab-case'];

console.log(JSON.stringify(testValues.map((value) => {
  return {
    text: value,
    result: id(value),
  };
}), null, 2));