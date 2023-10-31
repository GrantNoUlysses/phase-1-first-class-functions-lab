// Code your solution in this file!
const returnFirstTwoDrivers = function(x) {
    let y=x.slice(0,2);
    return y
}
const returnLastTwoDrivers = function(x) {
    let y=x.slice(2,4);
    return y
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (x) {
    return function(fare) {
        return x * fare;
}
}
const fareDoubler = createFareMultiplier (2)
const fareTripler = createFareMultiplier (3)

function selectDifferentDrivers (x,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(x)
}