const express = require('express');
const envelopeRouter = express.Router();
const envelopes = require('./envelopesDB')
const { getElementByID, nextID } = require('./helperUtil')
const { addToDatabase } = require('./envelopesDB')

envelopeRouter.get('/', (req, res, next) => {
    res.send(envelopes)
})

envelopeRouter.get('/:id', (req, res, next) => {
    res.send(getElementByID(Number(req.params.id)))
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