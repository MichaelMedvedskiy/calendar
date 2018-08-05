moment.updateLocale('en', {
    months : [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
});
var calendarDate = new moment().startOf('month');

var literallyNowTimestamp = new moment().valueOf();

var dayChosen=0;
