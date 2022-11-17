const { getElementIndexByID } = require("./helperUtil")

const envelopes = [{id: 1, title: 'Env 1', budget: 2000}, {id: 2, title: 'Env 2', budget: 3000}, {id: 3, title: 'Env 3', budget: 4000}];

const addToDatabase = (envelope) => {
    envelopes.push(envelope)
    return envelopes
}

const deleteFromDatabase = (idToDelete, array) => {
    envelopes.splice(getElementIndexByID(idToDelete, array), 1);
    return envelopes
}

const updateElement = (propertyToChange, elementToChange, changeToMake, array) => {
    let elementIndex = getElementIndexByID(elementToChange.id, array)
    let element = envelopes[elementIndex]
    element[propertyToChange] = changeToMake;
    return envelopes
}

module.exports = {envelopes, addToDatabase, deleteFromDatabase, updateElement} 