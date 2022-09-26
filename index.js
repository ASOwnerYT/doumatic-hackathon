const dayjs = require('dayjs');
const isLeapYear = require('dayjs/plugin/isLeapYear')
dayjs.extend(isLeapYear)

module.exports = function(args) {
    return `Good ${dayjs(args).hour() < 12 ? 'morning' : 'afternoon'}! Today is ${dayjs(args).format('dddd, MMMM D, YYYY')}. The time is ${dayjs(args).format('h:mm A')}.${dayjs(args).isLeapYear() ? ' Did you know that this year is a leap year?' : ''}`;
}