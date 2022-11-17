const { getElementIndexByID } = require("./helperUtil")

const envelopes = [];

const addToDatabase = (envelope) => {
    envelopes.push(envelope)
    return envelopes
}

const deleteFromDatabase = (idToDelete, array) => {
    envelopes.splice(getElementIndexByID(idToDelete, array), 1);
    return envelopes
}


module.exports = {envelopes, addToDatabase, deleteFromDatabase} 