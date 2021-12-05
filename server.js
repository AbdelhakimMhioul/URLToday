const router = require('./api/routes/UrlRoutes')
const express = require('express')
const app = express()

require('dotenv').config()
app.use(require('cors')());

// parse application/json
app.use(express.json());

const dbURI = process.env.MONGODB_URI;
require('mongoose')
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected');
		app.listen(process.env.PORT || 3000);
	})
	.catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }))
app.use('/api/urls', router)