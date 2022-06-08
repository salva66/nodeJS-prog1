const { fstat } = require("fs");
const http = require("http");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//port of the server
const host = 'localhost';
const port = 8000;
const someObject = require('./stud_array.json');
global.document = new JSDOM(html).window.document;
const myJson =JSON.stringify(someObject);
window.document.getElementsByName.innerHTML = myJson;
const requestListener = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //sets HTTP status code of the response
    
    res.end();
};
console.log(someObject);

const server = http.createServer(requestListener); //created server object
server.listen(port, host, () => {//request listener function
    console.log(`Server is running on http://${host}:${port}`);
});