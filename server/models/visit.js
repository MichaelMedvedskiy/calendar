const mongoose = require('mongoose');

var VisitSchema = new mongoose.Schema(
  {
    timestampStart: {
      type: Number,
      required: true,
      unique: true
    },
    timestampFinish:{
      type: Number,
      required: true,
      unique: true
    },
    attendeeName:{
      type: String,
      required:true
    },
    attendeePhone:{
      type: String,
      minlength: 6,
      required: true
    }
  }
);

VisitSchema.statics.findDailySchedule = function(start,finish){
  try{
    return this.find({
    timestampStart  : { $gt: start-1, $lt: finish+1 },
    });
  }catch(e){
      return Promise.reject(e);
  }
};


var Visit = mongoose.model('Visit',
VisitSchema
);

module.exports = {Visit};
