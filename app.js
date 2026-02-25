function getStringParameters(query) {
  if (Object.keys(query).length === 0) {
    return undefined;
  }

  const parameters = [];
  for (let key in query) {
    if (typeof query[key] === 'function') {
      continue;
    }
    parameters.push(`${key}=${query[key]}`);
  }
  return parameters.join('&');
}

const query = {
  search: 'Вася',
  take: 10
};

const query1 = {};

const query2 = {
  search: 'Петя',
  getParamSearch: function () {
    return this.search;
  },
  take: 152
};


console.log(getStringParameters(query));
console.log(getStringParameters(query1));
console.log(getStringParameters(query2));