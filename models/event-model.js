const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const eventSchema = new Schema({
  postingTitle: { type: String, required: true },
  description: { 
    type: String, 
    maxlength: 100,
    required: true },
    owner: { 
      type: Schema.Types.ObjectId, 
      ref: "Association",
      required: true },
  postingTime: { type: Date },
  location: { type: String, required: true },
  link: { type: String }
      
}, {
  timestamps: true,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;