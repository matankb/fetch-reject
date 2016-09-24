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
## License

[MIT  © Matan Kotler-Berkowitz](https://github.com/matankb/fetch-reject/blob/master/LICENSE)
