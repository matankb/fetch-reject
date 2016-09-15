var exports = module.exports;

function fetchReject(...params) {
  return fetch(params)
    .then(handleErrors)
}

function handleErrors(response) {
  return new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response);
    } else {
      reject(response.statusText);
    }
  })
}

exports = fetchReject;
