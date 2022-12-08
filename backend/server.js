// =================================
//             IMPORTS
// =================================
const Characters = require('./models/characterSchema.js')

// =================================
//             EXPRESS
// =================================

const express = require('express')
const app = express()
app.use(express.json())

// =================================
//             MONGOOSE
// =================================
const mongoose = require('mongoose')

// =================================
//             CORS
// =================================
const cors = require('cors')
app.use(cors())

// CREATE
app.get('/sparty', (req, res) => {
    Characters.find({}, (err, addedChar) => {
        res.json(addedChar)
    })
})
// READ
app.post('/sparty', (req, res) => {
    Characters.create(req.body, (err, createCharacter) => {
        res.json(createCharacter)
    })
})

//UPDATE
app.put('/sparty/:id', (req, res) => {
    Characters.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedChar) => {
        res.json(updatedChar)
    })
})

//DELETE
app.delete('/sparty/:id', (req, res) => {
    Characters.findByIdAndDelete(req.params.id, (err, deletedChar) => {
        res.json(deletedChar)
    })
})



// =================================
//            CONNECTIONS
// =================================
mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongo...');
})

app.listen(3000, () => {
    console.log('listening...');
})

