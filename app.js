const client = require('./connection.js')
const express = require('express')
const bodyparser = require('body-parser')

const app = express();
client.connect();
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({ extended: true }))
app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    if (req.body.res == '+') {
        var output = n1 + n2;
        res.send('Result:' + output);
        var pg = "Insert into cal(myinput, myinput1, result ,btn ,time) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })
    }
    else if (req.body.res == '-') {
        var output = n1 - n2;
        res.send('Result:' + output);
        var pg = "Insert into cal(myinput, myinput1, result ,btn ,time) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })
    }
    if (req.body.res == '*') {
        var output = n1 * n2;
        res.send('Result:' + output);
        var pg = "Insert into cal(myinput, myinput1, result ,btn ,time) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })
    }
    if (req.body.res == '/') {
        var output = n1 / n2;
        res.send('Result:' + output);
        var pg = "Insert into cal(myinput, myinput1, result ,btn ,time) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })
    }
    if (req.body.res == '%') {
        var output = n1 % n2;
        res.send('Result:' + output);
        var pg = "Insert into cal(myinput, myinput1, result ,btn ,time) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })
    }
    else if (req.body.res == 'C') {
        var output = "";
        res.send("");
    }

    else {
        res.send(errorMessage);
    }


});

app.get('/History', (req, res) => {
    client.query("Select * from cal ", (err, result) => {
        if (!err) {
            res.render('History', { 'item': result.rows }
            );


        }
    })
});


app.listen('7000', (res) => {
    console.log("Connected to port 7000")
})
