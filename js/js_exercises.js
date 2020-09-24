//Exercise 1

console.log("Exercise 1 completed in Chrome Console");

//Completed in the Chrome Console

//Exercise 2

console.log('Exercise 2');

var sample = "Hello Codeup";

console.log("var sample = " + sample);

console.log("sample.length = " + sample.length);

console.log("sample.toUpperCase() = " + sample.toUpperCase());

console.log("sample.toLowerCase() = " + sample.toLowerCase());

sample = sample + " Students";

console.log("sample + ' Students' = " + sample);

sample = sample.replace("Students", "Class")

console.log("sample.replace('Students', 'Class') = " + sample);

console.log("index of 'c' = " + sample.indexOf('c'));

console.log("index of 'C' = " + sample.indexOf('C'));

sample = sample.substring(sample.indexOf('C'), sample.indexOf('Cl'));

console.log("sample.substring(sample.indexOf('C'), sample.indexOf('Cl')) = " + sample);

//Exercise 3

console.log('Exercise 3');

var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;

var totalCost = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)

console.log("Price paid for all three movies is: $" + totalCost);

var google = 400;
var amazon = 380;
var facebook = 350;

var totalPayment = (facebook * 10) + (google * 6) + (amazon * 4);

console.log("Payment received from all three companies is: $" + totalPayment);

console.log('studentCanBeEnrolled = classIsNotFull && noConflictingSchedule');

console.log('offerApplied = buyMoreThanTwo && offerNotExpired');

//Exercise 4

console.log("Exercise 4");

var username = 'codeup';
var password = 'notastrongpassword';

console.log("password.length >= 5 is:");

console.log(password.length >= 5);

console.log("password does not contain username is:")

if(password.replace(username, 1) === password) {
	console.log(true);
}
else {
	console.log(false);
}

console.log("username contains 20 characters or less is: ");

if(username.length <= 19) {
	console.log(true);
}
else {
	console.log(false);
}

console.log("neither username or password starts or ends with whitespace is: ");

if(username.trim() !== username || password.trim() !== password) {
	console.log(false);
}
else {
	console.log(true);
}

