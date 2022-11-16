const { envelopes } = require("./envelopesDB")


const getElementByID = (id) => {
    return envelopes.find(el => {
        return el.id === Number(id);
    })
}

const nextID = () => {
    return ((Number(envelopes[envelopes.length - 1].id)) + 1)
}

module.exports = { getElementByID, nextID }