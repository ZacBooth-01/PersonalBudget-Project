const getElementByID = (id, array) => {
    return array.find(el => {
        return el.id === Number(id);
    })
}

const getElementIndexByID = (id, array) => {
    return array.findIndex(el => {
        return el.id === Number(id);
    })
}

const nextID = (array) => {
    if(array.length === 0) {
        return 1;
    }else {
        return ((Number(array[array.length - 1].id)) + 1)}
}



module.exports = { getElementByID, nextID, getElementIndexByID }