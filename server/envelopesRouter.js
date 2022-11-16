const express = require('express');
const EnvelopeRouter = express.Router();
const envelopes = require('./envelopesDB')
const { getElementByID } = require('./helperUtil')

EnvelopeRouter.get('/', (req, res, next) => {
    res.send(envelopes)
})

EnvelopeRouter.get('/:id', (req, res, next) => {
    res.send(getElementByID(Number(req.params.id)))
})



module.exports = EnvelopeRouter