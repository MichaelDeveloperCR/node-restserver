require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World')
})

//update data too
app.get('/usuario', function(req, res) {
    res.json('Get Usuario')
})

//create Data
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.Nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensajes: "El nombre es necesario"
        });
        //{
        //    "ok": false,
        //    "mensajes": "El nombre es necesario"
        //}
    } else {
        res.json({ Persona: body })
            //{
            //"Persona": {
            //    "Nombre": "Michael",
            //    "Edad": "28"
            // }
            //}
    }

})

//put and pathupdate data
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json(id)
})

app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario')
})



app.listen(process.env.PORT, () => { console.log("Escuchando puerto", 3000); })

//app.listen(3000, () => { console.log("Escuchando puerto", 3000); })