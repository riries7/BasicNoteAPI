// async function is a function which always returns as a promise value with simpler code than sync function with promise in it as well 

// it is simple because async function doesn't need then method & response to call the promise value (note : the condition of function requirement can be met)

// sync function that use promise

function logFetch(url) { return fetch(url) .then(response => response.text()) .then(text => { console.log(text); }).catch(err => { console.error('fetch failed', err); }); }

// async function

async function logFetch(url) { try { const response = await fetch(url); console.log(await response.text()); } catch (err) { console.log('fetch failed', err); } }