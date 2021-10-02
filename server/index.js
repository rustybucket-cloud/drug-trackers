const fs = require('fs');
const data = fs.readFileSync('words.json');
const medications = JSON.parse(data);

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
    console.log('Get medicine request made')
    response.send(medications);
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