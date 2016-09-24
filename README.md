# Fetch Reject
>A simple wrapper for fetch which rejects on HTTP error

Normal `fetch` does not throw on HTTP error (non-200 status code). This wrapper allows it to do so.
## Install
```
$ npm install --save fetch-reject;
```
## Usage
```js
import fetch from 'fetch-reject';

// use just like normal fetch
fetch('http://httpstat.us/500')
  .then(date => doSomething(data));
  .catch(err => {
    console.log(err) // -> 'GET ... 500 (Internal Server Error)'
    console.log(err.status) // -> 500
  })

```
## API

See the [`fetch` docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for more.

### fetch(url, [init])

Same as normal `fetch`, but it rejects with an [`Error` object](#Returns) on non-200.

#### Returns

Type: `Error`

Will be `reject`-ed on non-200 response. An error object containing the `statusText` of the response. Has a `status` field which is equal to `response.status`;

### createFetchReject(originFetch)

Returns a `fetch` function similar to the one documented above, but using the provided `originFetch` function. Can be used to enhance polyfills.

### originFetch

Type: `function`

A function that complies with the original `fetch` spec. Will be used instead of `window.fetch` internally

#### Returns
Type: `function`

A function that acts similarly to `fetch` (detailed above), but uses the provided `originFetch` function instead.
## License

[MIT  © Matan Kotler-Berkowitz](https://github.com/matankb/fetch-reject/blob/master/LICENSE)
