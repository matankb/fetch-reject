var exports = module.exports;

function handleErrors(response) {
  if (response.ok) {
    return response;
  }
  
  throw Error(response.statusText);
}

exports = (input, init) => fetch(input, init).then(handleErrors);
