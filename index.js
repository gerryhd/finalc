const express = require('express'),
    http = require('http'),
    PORT = 80,
    app = require("express")(),
    server = http.createServer(app),
    body_parser = require("body-parser"),
    io = require("socket.io");

console.log('Application running!');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/*", function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.get("/", function(req, res) {
    res.send(" Real time POS web app running.");
});

app.use("/api/account", require("./api/account"));
app.use("/api", require("./api/transactions"))

server.listen(port, () => console.log(`Listening on port ${port}`));;