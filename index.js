// 'use strict';

// const mockData = require('./mockData.js').data;

// myProfile = {
//   name: Tom,
//   surname: Koenen,
//   age: 44, 
//   gender: "M",
//   gender_interest: "F",
//   location: city,
//   min_age_interest: 25,
//   max_age_interest: 50,
// }

console.log("Hi there!")
while (true) {
  const mockData = require('./mockData.js').data;
  
  let name;
  let surname;
  let age;
  let gender;
  let gender_interest;
  let location;
  let min_age_interest;
  let max_age_interest;
  let myProfile = {};

  while (true) {
    name = prompt("Please tell me your first name?");
    if (name == null || name == "") {
      console.log("You must enter your name into the prompt box!");
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      console.log("Please only enter letters");
    } else if (name.length <= 2) {
      console.log("Please enter 2 or more letters");
    } else {
      console.log(`Welcome to our dating app ${name}! We'll gonna do our best to find you some matches.`)
      myProfile.name = name;
      break;
    }
  }
console.log(myProfile);
  
  while (true) {
    surname = prompt("Please tell me your last name?");
    if (surname == null || surname == "") {
      console.log("Please try again");
    } else if (!/^[a-zA-Z]+$/.test(surname)) {
      console.log("Please enter only letters");
    } else if (surname.length <= 2) {
      console.log("Please enter 2 or more letters");
    } else {
      console.log(`Thank you!`)
      myProfile.surname = surname;
      break;
    }
  }
console.log(myProfile);
  while (true) {
    age = Number(prompt("And what is your age?"));
    if (age == null) {
      console.log("Please try again");
    } else if (age >= 18 && age <= 100) {
      console.log("Thank you!");
      myProfile.age = age;
      break;
    } else if (age < 18) {
      console.log("Only adults are allowed to partake. Please come back when you`re old enough");
     
      break;
    }
    else {
      console.log("Please try again");
    }
  }
console.log(myProfile);
  while (true) {
    gender = prompt("What is your gender?");
    if (gender === "M" || gender === "F" || gender === "X") {
      console.log("Thank you!");
      myProfile.gender = gender;
      break;
    } else {
      console.log("Please type in capital letter M, F or X");
    }
  }
console.log(myProfile);
  while (true) {
    gender_interest = prompt("What sex are you interested in M, F, B or X?");
    if (gender_interest === "M" || gender_interest === "F" || gender_interest === "X") {
      console.log("Thank you!");
      myProfile.genderInterest = gender_interest;
      break;
    } else if (gender_interest === "B") {
      console.log("Thank you!");
      myProfile.genderInterest = ["M", "F"];
      break;
    } else {
      console.log("Please type in capital letter M, F or X");
    }
  }
  console.log(myProfile);
  while (true) {
    location = prompt("Please choose your location, rural or city? (be exact pls)");
    if (location === "rural" || location === "city") {
      console.log("Thank you!");
      myProfile.location = location;
      break;
    } else {
      console.log("Please type 'rural' or 'city'");
    }
  }
  console.log(myProfile);
  while (true) {
    min_age_interest = Number(prompt("What minimal age would you like your partner to have?"));
    if (min_age_interest == null) {
      console.log("Please try again");
    } else if (min_age_interest > 17 && min_age_interest < 100) {
      console.log("Thank you!");
      myProfile.min_age_interest = min_age_interest;
      break;
    } else {
      console.log("Please enter a number (from 18 to 99)")
    }
  }
  console.log(myProfile);
  while (true) {
    max_age_interest = Number(prompt("What maximum age would you like your partner to have?"));
    if (max_age_interest == null) {
      console.log("Please try again");
    } else if (max_age_interest < min_age_interest) {
      console.log("Your maximum age interest has to be higher then your minimum age interest");
    } else if (max_age_interest > 18 && max_age_interest < 151) {
      console.log("Thank you!");
      myProfile.max_age_interest = max_age_interest;
      break;
    } else {
      console.log("Please enter a number and make sure it`s higher then your minimum age interest")
    }
  }
  console.log(myProfile);
  while (true) {
  let matchObject = [];
  let i = 0;
  // let myProfile = {
  //   first_name: "Tom",
  //   last_name: "Koenen",
  //   age: 44,
  //   gender: "M",
  //   gender_interest: ["M","F"],
  //   location: "city",
  //   min_age_interest: 18,
  //   max_age_interest: 104
  // }
  for (let i = 0; i < mockData.length; i++) {

    if (
      (((myProfile.age >= mockData[i].min_age_interest) && (myProfile.age <= mockData[i].max_age_interest))
      && ((mockData[i].age >= myProfile.min_age_interest) && (myProfile.age <= mockData[i].max_age_interest)))
      && (((myProfile.gender_interest[0] == mockData[i].gender) || (myProfile.gender_interest[1] == mockData[i].gender))
      && ((mockData[i].gender_interest == myProfile.gender_interest[0]) || (mockData[i].gender_interest == myProfile.gender_interest[1])))
      && (
      myProfile.location === mockData[i].location))
     {
      console.log(`You've got a match named ${mockData[i].first_name} ${mockData[i].last_name} (${mockData[i].gender}) `);
      matchObject.push(mockData[i]);
     
    }

    console.log(`You've got ${matchObject.length} matches!`);
    console.table(matchObject);
  break;
  }
}
}
