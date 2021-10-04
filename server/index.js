const fs = require('fs');
const data = fs.readFileSync('words.json');
const medications = JSON.parse(data);

const mysql = require("mysql")
const con = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3442068",
    password: "UTBEtqNqxr",
    database: 'sql3442068'
});

const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port, listening())
function listening() {
    console.log(`Listening on port ${port}`)
}
app.use(express.static('../build'))

app.get('/get_medications', getMedications)
function getMedications(request, response) {
    console.log("hello");
    function query(cb) {
        const sql = 'SELECT * FROM MEDICATIONS'
        let meds;
        con.connect((err) => {
            if (err) throw err;
        });
        con.query(sql, (err, result) => {
            if (err) throw err;
            const data = JSON.stringify(result)
            console.log("Result: " + data);
            return cb(data)
        });
    }
    let data;
    query( (meds) => {
        console.log(meds);
        response.send(meds);
    });
}

app.get('/add_medication/:name/:time/:generic/:comments', addMedication);
function addMedication(request, response) {
    const data = request.params
    const name = data.name
    const time = data.time
    const generic = data.generic
    const comments = data.comments

    const medication = {
        name,
        time,
        generic,
        comments
    }

    medications.medications.push(medication);
    const resp = JSON.stringify(medications); //stringiy the object
    fs.writeFile('words.json', resp, finished)
    response.send('medication succesfully added')
    console.log(medication)
    function finished(err) {
        console.log(`Data added`)
    }
}