let fullName = prompt("write your full name: ");
fullName = fullName.split(' ');
let firstName = fullName[0]
let middleName = fullName[1]
let lastName = fullName[2]


let var1 = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
let var2 = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
let var3 = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();


console.log("Firstname: " + var1 + ", Middlename: " + var2 + ", Lastname: " + var3)