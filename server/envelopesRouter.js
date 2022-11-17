const express = require('express');
const envelopeRouter = express.Router();
const {envelopes} = require('./envelopesDB')
const { getElementByID, nextID } = require('./helperUtil')
const { addToDatabase, deleteFromDatabase } = require('./envelopesDB')

const checkInArray = (paramId) => {
    let inArray = envelopes.find(el => el.id === Number(paramId))
    return inArray
}

envelopeRouter.get('/', (req, res, next) => {
    res.send(envelopes)
})

envelopeRouter.get('/:id', (req, res, next) => {
    if(checkInArray(req.params.id)){
        res.send(getElementByID(req.params.id, envelopes))
    } else{
        res.status(404).send()
    }
    
})

envelopeRouter.post('/', (req, res, next) => {
    if(req.body.title && !isNaN(parseInt(req.body.budget))){
        let newEnvelope = {
            id: nextID(envelopes),
            title: req.body.title,
            budget: req.body.budget
        }
        addToDatabase(newEnvelope)
        res.status(201).send(newEnvelope)
    } else{
        res.status(400).send('Missing Parameter or parameter is not correct input.')
    }

})

envelopeRouter.delete('/:id', (req, res, next) => {
    deleteFromDatabase(req.params.id, envelopes)
    res.status(200).send(`Number ${Number(req.params.id)} has been deleted.`)
})



module.exports = envelopeRouter