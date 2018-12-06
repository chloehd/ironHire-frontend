const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const recruiterSchema = new Schema(
    {
// document structure for recruiter profile
avatar: {
    type: String,
},

role: { 
    type: String
},

companyName: {
    type: String,
    required: true
},

companyWebsite: {
    type: String,
},

description: {
    type: String,
    required: true
},
    }
);

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;















    }
)