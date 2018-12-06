const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cvSchema = new Schema(
    {

// document structure for candidate's CV

avatar: {
    type: String, 
}, 

fullName: {
    type: String,
    required: true,
    minlenght: 4
},

email: {
    type: String,
    required: true
},

employmentStatus: {
    type: String,
    required: true
},

experience: {
    type: String

},

education: {
    type: [ Array ]
},

languages: {
    type: [ String ],
    required: String

},

achievement: {
    type: String
},

},
{
  // additional settings for the Schema class
  timestamps: true
}
);

const Cv = mongoose.model("Cv", cvSchema);

module.exports = Cv;












    }
);








)