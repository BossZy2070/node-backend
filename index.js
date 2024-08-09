const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`APL Listening on PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

module.exports = app