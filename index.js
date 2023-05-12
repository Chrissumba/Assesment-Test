// Number one

function checkNumbers(num1, num2) {
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
        return true;
    } else {
        return false;
    }
}

// Example usage:

console.log(checkNumbers(3, 8));
console.log(checkNumbers(9, 6));
console.log(checkNumbers(4, 5));

// Number two
// converting a number to hours and minutes
function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const theMinutes = minutes % 60;

    return `${hours} hours and ${theMinutes} minutes`;
}

// Example usage:
const totalMinutes = 200;
const time = convertToHoursAndMinutes(totalMinutes);

console.log(time); // Output: 2 hours and 15 minutes

//Number Three

function createArrayWithFirstAndLastElements(arr) {
    if (arr.length < 1) {
        throw new Error("Array length must be larger than or equal to 1.");
    }

    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

    return [firstElement, lastElement];
}

// Example usage:
const integers = [2, 4, 6, 8, 10];
const result = createArrayWithFirstAndLastElements(integers);

console.log(result); // Output: [2, 10]


//Number Four: Findind the type of an  angle given a certain number

function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

// Example usage:
const angle1 = 36;
const type1 = findAngleType(angle1);
console.log(`${angle1} degrees is a ${type1}`);

const angle2 = 90;
const type2 = findAngleType(angle2);
console.log(`${angle2} degrees is a ${type2}`);

const angle3 = 133;
const type3 = findAngleType(angle3);
console.log(`${angle3} degrees is an ${type3}`);

const angle4 = 180;
const type4 = findAngleType(angle4);
console.log(`${angle4} degrees is a ${type4}`);


// Number five of the assesment test

//The result of the operation will be 105.
// This is because  5+5 is evaluated first resulting to 10,which is a number.
// "5" is considered a string by the IDE thus it will be put next to the number 10 thus resulting to the figure of 105.