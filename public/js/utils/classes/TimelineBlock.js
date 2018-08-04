class TimelineBlock{
  constructor(timestamp, id, status){
    this.moment = new moment(timestamp);
    this.id = id;
    this.status = status;
  }

  getAddedMinutes(min){
  return new moment(this.moment).add(min,'minutes');
  }

  getFormatted(){
    return this.moment.format('HH : mm');
  }

  getTimestamp(){
    return this.moment.valueOf();
  }

  getId(){
    return this.id;
  }

  setStatus(status){
    this.status = status;
  }
  getStatus(){
    return this.status;
  }

  generateFullTimestamp(){
    return new moment(calendarDate).add(dayChosen-1, 'days').add(this.moment.hours(), 'hours').add(this.moment.minutes(), 'minutes');
  }
}
