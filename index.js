const createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
 }

const createEmployeeRecords = function(array) {
    return array.map((event) => {
        return createEmployeeRecord(event)
    })
 }

const createTimeInEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
 }

const createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
 }

const hoursWorkedOnDate = function(dates) {
    let inTime = this.timeInEvents.find(function(event) {
        return event.date === dates
    })
    let outTime = this.timeOutEvents.find(function(event) {
        return event.date === dates
    })
    return (outTime - inTime) / 100
 }

const wagesEarnedOnDate = function(dates) {
    let totalWages = hoursWorkedOnDate.call(this, dates) * this.payPerHour
    return parseFloat(totalWages.toString());
 }


const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find((event) => {
        return event.firstName === firstName
    })
 }

const calculatePayroll = function(arrayOfEmployees) {
    let total = 0;
    arrayOfEmployees.map((event) => {
        total += allWagesFor.call(event)
    })
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// allWagesFor Function Below 

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

