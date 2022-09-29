const express = require("express");
const app = express();
const cors = require("cors");
const videos = require('./routes/videos')

app.use(cors());
app.use(express.static("public"));

const videosData = require('./data/videos.json')
const fullVideosData = require('./data/video-details.json')

app.use(express.json());

app.get("/", function (req, res) {
  res.send(
    "Welcome to the backend api please use the appropriate routes to get the data"
  );
});
app.use('/videos', videos)

app.get("/videos/:id", function (req, res) {
  const id = req.params.id;
  const selectedVideo = fullVideosData.find((video) => video.id === id);
  res.send(selectedVideo);
});

app.post("/videos-details", function (req, res) {
  fullVideosData.push(req.body);
  return res.status(201).send(fullVideosData);
});

app.listen(8080, function () {
  console.log("listening on port 8080");
});
