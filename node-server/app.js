const http = require('http');

function echoHandler(req, res) {
    if (req.method === 'GET') {
        const reqUrl = new URL(req.url, 'http://127.0.0.1/');
        const name = reqUrl.searchParams.get('name') || 'World';
        res.writeHead(200);
        res.write(`Hello, ${name}!\n`);
        res.end();
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Accumulate the data chunks
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body); // Parse the JSON payload
                const name = data.name || 'World';
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(`Hello, ${name}!\n`);
                res.end();
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.write('Invalid JSON payload\n');
                res.end();
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.write('Method Not Allowed\n');
        res.end();
    }
}

/** handle GET request */
function getHandler(req, res, reqUrl) {
    res.writeHead(200);
    console.debug(reqUrl.searchParams);
    console.debug(reqUrl.searchParams.keys());
    console.debug(reqUrl.searchParams.get('a'));
    res.write('GET parameters: ' + reqUrl.searchParams);
    res.end();
}

/** handle POST request */
function postHandler(req, res, reqUrl) {
    req.setEncoding('utf8');
    req.on('data', (chunk) => {
        res.writeHead(200);
        res.write('POST parameters: ' + chunk);
        res.end();
    });
}

/** if there is no related function which handles the request, then show error message */
function noResponse(req, res) {
    res.writeHead(404);
    res.write('Sorry, but we have no response..\n');
    res.end();
}

http.createServer((req, res) => {
    // create an object for all redirection options
    const router = {
        'GET/echo': echoHandler,
        'POST/echo': echoHandler,
        'GET/retrieve-data': getHandler,
        'POST/send-data': postHandler,
        'default': noResponse
    };
    // parse the url by using WHATWG URL API
    let reqUrl = new URL(req.url, 'http://127.0.0.1/');
    // find the related function by searching "method + pathname" and run it
    let redirectedFunc = router[req.method + reqUrl.pathname] || router['default'];
    redirectedFunc(req, res, reqUrl);
}).listen(8080, () => {
    console.log('Server is running at http://127.0.0.1:8080/');
});