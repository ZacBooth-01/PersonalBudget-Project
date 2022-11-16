const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')
const EnvelopeRouter = require('./envelopesRouter')

app.use(bodyParser.json())
app.use('/envelopes', EnvelopeRouter)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

