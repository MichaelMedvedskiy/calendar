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

VisitSchema.statics.findCrossing = async function(start,finish){
  var stArr = await this.find({
    timestampStart : { $lt: start},
    timestampFinish :  {$gt: start}
  });
  var endArr = await this.find({
    timestampStart : { $lt: finish},
    timestampFinish :  {$gt: finish}
  });
  if(stArr.length === 0 && endArr.length === 0) return false;
  return true;
};

VisitSchema.methods.checkIfTimeFree = async function(){
var isTaken = await Visit.findCrossing(this.timestampStart,this.timestampFinish);
 return isTaken;
};


var Visit = mongoose.model('Visit',
VisitSchema
);

module.exports = {Visit};
