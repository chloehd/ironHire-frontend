const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const associationSchema = new Schema({
    associationLogo: { type: String },
    name: { type: String, required: true },
    createdOn: { type: Date },
    description: { type: String, required: true },
    addInformation: { type: String },
    verified: {
        type: Boolean,
        default: false,
        required: true,
    },
    role: {
        type: String,
        enum: ["candidate", "admin", "recruiter", "association"],
        required: true,
        default: "association",
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
      }, 
    telNumber: { type: String },
    encryptedPassword: { type: String },
}, {
        timestamps: true
});

const Association = mongoose.model("Association", associationSchema);
module.exports = Association;