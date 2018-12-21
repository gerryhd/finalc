var app = require("express")();
var server = require("http").Server(app);
var bodyParser = require("body-parser");
var Datastore = require("nedb");
var async = require("async");

app.use(bodyParser.json());

module.exports = app;

// Creates  Database
var accountDB = new Datastore({
    filename: "./server/databases/account.db",
    autoload: true
});

app.get("/", function(req, res) {
    res.send("Account API");
});

// GET a product from inventory by _id
app.get("/user/:userId", function(req, res) {
    if (!req.params.userId) {
        res.status(500).send("ID field is required.");
    } else {
        accountDB.findOne({ _id: req.params.userId }, function(err, user) {
            res.send(user);
        });
    }
});

// Create user account
app.post("/account", function(req, res) {
    let newAccount = req.body;

    accountDB.insert(newAccount, function(err, account) {
        if (err) res.status(500).send(err);
        else res.send(account);
    });
});