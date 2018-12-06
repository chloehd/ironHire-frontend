const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
    companyLogo: { type: String },
    companyName: { type: String, required: true },
    companyWebsite: { type: String },
    telNumber: { type: Number },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
      }, 
    description: { type: String, required: true },
    encryptedPassword: { type: String },
    role: {
        type: String,
        enum: ["candidate", "admin", "recruiter", "association"],
        required: true,
        default: "recruiter",
    }
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;