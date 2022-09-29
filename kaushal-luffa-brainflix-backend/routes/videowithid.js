const express = require('express');
const router = express.Router()
const fullVideosData = require('../data/video-details.json')

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    const selectedVideo = fullVideosData.find((video) => video.id === id);
    res.send(selectedVideo);
})