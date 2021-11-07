const express = require('express')
const  db  = require('./db/db')
const app = express()
app.use(express.json())
app.use(require('./routes/categoryRoute'))
app.use(require('./routes/poemRoute'))

const Port  = process.env.PORT || 5200

app.get('/',(req,res) => {
    res.send('ssdsdd')
})

function startServer () {
    db()
    app.listen(Port,() => console.log(`Server is running on port ${Port}`))
}
startServer()

