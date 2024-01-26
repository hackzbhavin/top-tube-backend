const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  title: { type: String },
  videoUrl: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  views: { type: Number },
  likes: { type: Number },
  comments: { type: Number },
  subscriberCount: { type: Number },
  updatedOn: { type: String },
  isSoftDelete: { type: Boolean, default: false },
  createdDateTime: { type: Date, default: Date.now }, 
});

const videos = mongoose.model("videos", videoSchema);

module.exports = videos;
