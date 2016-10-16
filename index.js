function handleErrors(response) {
  if (response.ok) {
    return response;
  }

  let error = new Error();
  // attatch status to error so it can be accessed by handler
  error.status = response.status;
  throw error;

}

function fetchReject(url, init) {
  return fetch(url, init)
    .then(handleErrors)
}

function createFetchReject(originFetch) {
// function to enhance fetch polyfills
  return function(...params) {
    originFetch(...params)
      .then(handleErrors);
  }
}

module.exports = fetchReject;
module.exports.createFetchReject = createFetchReject;
