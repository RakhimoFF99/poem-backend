const express = require('express')
const  db  = require('./db/db')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(require('./routes/categoryRoute'))
app.use(require('./routes/poemRoute'))
app.use(require('./routes/authUser'))

const Port  = process.env.PORT || 5200

app.get('/',(req,res) => {
    res.send('ssdsdd')
})

function startServer () {
    db()
    app.listen(Port,() => console.log(`Server is running on port ${Port}`))
}
startServer()

