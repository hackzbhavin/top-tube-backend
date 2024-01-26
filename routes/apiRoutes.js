const express = require("express");
const { v4: uuidv4 } = require("uuid");
const videos = require("../models/videos");

const router = express.Router();


const apiRoutes = {
  addVideo: "/add-video",
  allVideos: "/all-videos",
};


// post api
router.post(apiRoutes.addVideo, async (req, res) => {
  try {
    const {
      youtubeUrl,
      title,
      videoUrl,
      description,
      thumbnail,
      views,
      likes,
      comments,
      subscriberCount,
    } = req.body;

    const video = new videos({
      videoId: uuidv4(),
      youtubeUrl,
      title,
      videoUrl,
      description,
      thumbnail,
      views,
      likes,
      comments,
      subscriberCount,
      updatedOn: new Date().toISOString(),
    });

    await video.save();

    res.json({ success: true, video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});


// get all api
router.get(apiRoutes.allVideos, async (req, res) => {
  try {
    const allVideos = await videos.find({ isSoftDelete: false });

    res.json({ success: true, allVideos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});


module.exports = router;
