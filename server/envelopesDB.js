const envelopes = []

const addToDatabase = (envelope) => {
    envelopes.push(envelope)
    return envelopes
}


module.exports = {envelopes, addToDatabase}