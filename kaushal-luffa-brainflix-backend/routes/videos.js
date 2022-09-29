const express = require('express')
const router = express.Router()
const videos = require('../data/videos.json')

router.get('/', function(req,res){
res.send(videos)
})
router.post('/', function(req,res){
videos.push(req.body);
return res.status(201).send(videos);
})


module.exports = router