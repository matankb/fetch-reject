function fetchReject(...params) {
  return fetch(...params)
    .then(handleErrors)
}

function handleErrors(response) {
  if (response.ok) {
    return response;
  }

  let error = new Error();
  // attatch status to error so it can be accessed by handler
  error.status = response.status;
  throw error;

}

// function to enhance fetch polyfills
function createFetchReject(originFetch) {
  return function(...params) {
    originFetch(...params)
      .then(handleErrors);
  }
}

module.exports = fetchReject;
module.exports.createFetchReject = createFetchReject;
