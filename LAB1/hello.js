const { fstat } = require("fs");
const http = require("http");

//port of the server
const host = 'localhost';
const port = 8000;
const someObject = require('./stud_array.json');

const requestListener = function (req, res) {
    res.writeHead(200); //sets HTTP status code of the response
    
    res.end();
};
console.log(someObject);

const server = http.createServer(requestListener); //created server object
server.listen(port, host, () => {//request listener function
    console.log(`Server is running on http://${host}:${port}`);
});
