const express = require("express");
const router = express.Router();
const videosDetails = require("../data/video-details.json");
app.post("/", function (req, res) {
  videosDetails.push(req.body);
  return res.status(201).send(videosDetails);
});
module.exports = router