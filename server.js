const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./api/routes/UrlRoutes')

const app = express()
app.use(cors())

// parse application/json
app.use(express.json())

const dbURI = 'mongodb+srv://hakim:leftleft@nodetuts.bejpk.mongodb.net/UrlShortener'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected')
        app.listen(process.env.PORT || 3000)
    }).catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use('/api/urls', router)