const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  postingTime: { type: Date, required: true },
  message: { type: String, required: true },
  owner: { 
      type: Schema.Types.ObjectId, 
      ref: "Association",
      required: true },
  imageUrl: { type: String },
  link: { type: String },
} , {
  timestamps: true,
});

const News = mongoose.model( "News", newsSchema );

module.exports = News;