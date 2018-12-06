const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

//doc structure for Associations
const associationSchema = new Schema (
{
avatar: {
    type: String,

},

name: {
    type: String,

},

createdOn: {
    type: Date, 
},

desciption: {
    type: String,
    required: true
},

additionalInformation: {
    type: String
},

verified: {
    required: false
},
 
role: {
    type: String
},

},
{
  timestamps: true
}
);

const Association = mongoose.model("Association", assocationSchema);

module.exports = Assocation;



















    }
)