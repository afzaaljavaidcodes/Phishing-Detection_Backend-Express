var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function (req, res, next) {
  res.send('Phishing Site Detection');

});

router.get('/send', function (req, res, next) {
  const postData = {
    url: "www.youtube.com"
  };

  const flaskApiUrl = 'http://localhost:5000/phishing_prediction';

  axios.post(flaskApiUrl, postData)
    .then(function (response) {
      console.log('Response from Flask API:', response.data);
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.error('Error calling Flask API:', error);
      res.status(500).json(error)
    });
});

module.exports = router;
