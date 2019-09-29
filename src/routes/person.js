let express = require('express')
let router = express.Router()

router.get('/person', (req, res) => {
	res.send('You have requsted a person')
})

router.get('/person/:name', (req, res) => {

	res.send(`You have requsted a person ${req.params.name}`)
})

module.exports = router