const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(cors());

app.use(express.static('public/images'))
let videosData
fs.readFile('./data/videos.json', "utf-8", (err, json) => {
  if (err) {
    console.log(err);
  } else {
    try {
     videosData= JSON.parse(json);
    } catch (error) {
      console.log("try error", error);
    }
  }
});
let fullVideosData
fs.readFile('./data/video-details.json', "utf-8", (err, json) => {
  if (err) {
    console.log(err);
  } else {
    try {
     fullVideosData= JSON.parse(json);
    } catch (error) {
      console.log("try error", error);
    }
  }
});
app.use(express.json())
app.use(express.urlencoded())

app.get("/", function (req, res) {
  res.send(
    "Welcome to the backend api please use the appropriate routes to get the data"
  );
});

app.get("/videos/", function (req, res) {
  res.send(videosData);
});

app.get("/videos/:id", function (req, res) {
  const id = req.params.id;
  const selectedVideo = fullVideosData.find((video) => video.id === id);
  res.send(selectedVideo);
});


app.post("/videos", function (req, res) {

  const newData = [...videosData]
  newData.push(req.body)
  fs.writeFile("./data/videos.json", JSON.stringify(newData,null,2), (err) => {
    if (err) throw err;
  });
// console.log('videosData', videosData)
// console.log('fullvideosData', fullVideosData)
  console.log('req.body',req.body);
  return res.status(201).send(newData);
});

app.listen(8080, function () {
  console.log("listening on port 8080");
});
