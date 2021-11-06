const mongoose = require('mongoose')
const config = require('config')

 const db = async () => {
    try {
        mongoose.connect(config.get('mongoUri'),console.log('connected to db'))
    }
    catch(e) {
        console.log(e)
    }
}

module.exports = db