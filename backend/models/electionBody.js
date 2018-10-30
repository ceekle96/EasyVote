const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Schema for election bodies
*/

ElectionBodySchema = new Schema({
  name: {//Name of election bodies e.g. Elections Canada
    type: String,
    required: true
  },
  country: {  //Country of origin of election body
    type: String,
    required: true
  },
  dateJoined: { //Date election body joined application
    type: Date,
    required: true,
    default: Date.now
  },
  logo: { //Path to the logo image file
    type: String
  },
  description: {  //Description of the election body
    type: String
  }

})

const ElectionBody = mongoose.model('electionBody', ElectionBodySchema);
module.exports = ElectionBody;
