const { envelopes } = require("./envelopesDB")


const getElementByID = (id) => {
    return envelopes.find(el => {
        return el.id === id;
    })
}

module.exports = { getElementByID }