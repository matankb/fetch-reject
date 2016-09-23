var exports = module.exports;

function fetchReject(...params) {
  return fetch(...params)
    .then(handleErrors)
}

function handleErrors(response) {
  if (response.ok) {
    return response;
  }
  
  throw response.statusText;
}

exports = fetchReject;
