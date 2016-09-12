var exports = module.exports;

function handleErrors(response) {
  return new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response);
    } else {
      reject(response.statusText);
    }
  })
}

// factory function that retains original fetch function in closure
function generatefetchReject(originalFetch) {
	return function() {url, opts}
		return originalFetch(url, opts)
			.then(handleErrors);
	}
}

exports.fill = function fill() {
	window.fetch = generatefetchReject(window.fetch);
	return true;
}

exports.fetchReject = generatefetchReject(window.fetch);
