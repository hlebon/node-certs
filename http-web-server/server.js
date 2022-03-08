"use strict";
const http = require("http"); // modulo http
const url = require("url"); // modulo url
const PORT = process.env.PORT || 5000; // definir puerto

const { STATUS_CODES } = http;

// crear template de html (hello)
const hello = `<html>
    <head>
        <style>
            body { background: #333; margin: 1.25rem }
            h1 { color: #EEE; font-family: sans-serif }
        </style>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`;

// create template de html (root)
const root = `<html>
    <head>
        <style>
            body {background: #333; margin: 1.25rem}
            h1 {color: yellow; font-size: 2rem; font-family: sans-serif}
        </style>
    </head>
    <body>
        <a href="/hello">Hello</a>
    </body>
</html>`;

// this function is called every time the HTTP
// server receives a request
// req: request object
// res: response object
// the res object is a writable stream,
// which is why calling end writes our content and also closes the connection.
// res.statusCode is 200 (OK) by default
const handleRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  // validate only GET requests
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end(STATUS_CODES[res.statusCode] + "\r\n");
    return;
  }

  const urlParse = url.parse(req.url);

  console.log({ urlParse });
  if (urlParse.pathname === "/") {
    res.end(root);
    return;
  }
  if (urlParse.pathname === "/hello") {
    res.end(hello);
    return;
  }
  if (urlParse.pathname === "/hello/panama") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ country: "Panama" }));
  }

  res.statusCode = 404;
  res.end(STATUS_CODES[res.statusCode] + "\r\n");
};

const server = http.createServer(handleRequest);

server.listen(PORT);

// CMD
/**
 * Command to use http mopdule to submit a POST request to our server
 * and then prints the result to the terminal:
 *
 * node -e "ht‌tp.request('ht‌tp://localhost:3000', {method: 'POST'}, (res) => res.pipe(process.stdout)).end()"
 * node -e "fs.mkdirSync('express-web-server')"
 */
