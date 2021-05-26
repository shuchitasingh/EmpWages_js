const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            console.log("Employee Present, is Part Time");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("Employee Present, is Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee is absent");
            return 0;
    }
}

let totalEmpHrs = 0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs*WAGE_PER_HOUR;
console.log("Total emp hours = "+totalEmpHrs+" Total employee wage = "+empWage);
