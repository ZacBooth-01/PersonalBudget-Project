const express = require('express');
const envelopeRouter = express.Router();
const { envelopes } = require('./envelopesDB')
const { getElementByID, nextID } = require('./helperUtil')
const { addToDatabase } = require('./envelopesDB')

const checkInArray = (paramId) => {
    let inArray = envelopes.find(el => el.id === Number(paramId))
    return inArray
}

envelopeRouter.get('/', (req, res, next) => {
    res.send(envelopes)
})

envelopeRouter.get('/:id', (req, res, next) => {
    if(checkInArray(req.params.id)){
        res.send(getElementByID(req.params.id))
    } else{
        res.status(404).send()
    }
    
})

envelopeRouter.post('/', (req, res, next) => {
    let newEnvelope = {
        id: nextID(),
        title: req.body.title,
        budget: req.body.budget
    }
    addToDatabase(newEnvelope)
    res.send(newEnvelope)
})



module.exports = envelopeRouter