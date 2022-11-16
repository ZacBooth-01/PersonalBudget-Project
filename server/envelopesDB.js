const envelopes = [{id: 1, title: "Envelope 1", budget: 3000}, {id: 2, title: "Envelope 2", budget: 6000}]

const addToDatabase = (envelope) => {
    envelopes.push(envelope)
    return envelopes
}


module.exports = {envelopes, addToDatabase}