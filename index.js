var express = require('express')
var cors = require('cors')
var app = express()
const request = require('request')
app.use(cors())

app.get('/api/', function (req, res, next) {
	request.get(req.query.url, {}, (err, response, body) => {
console.log(response)
		res.send(body);
	})
})

app.listen(8000, function () {
  console.log('CORS-enabled web server listening on port 80')
})