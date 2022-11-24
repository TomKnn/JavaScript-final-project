'use strict';

const mockData = require('./mockData.js').data;

// while (loop) {
//   let name;
//   let surname;
//   let age;
//   let gender;
//   let gender_interest;
//   let location;
//   let min_age_interest;
//   let max_age_interest;
//   let myProfile = {};

  console.log("Hi there!")
while (true) {
  let name;
  let surname;
  let age;
  let gender;
  let gender_interest;
  let location;
  let min_age_interest;
  let max_age_interest;
  let myProfile = {};
  let matchObject



  
    while(true){
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
    }}

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
      // age = 1
      break;
    }
    else {
      console.log("Please try again");
    }
  }

  while (true) {
    gender = prompt("Gender?");
    if (gender === "M" || gender === "F" || gender === "X") {
      console.log("Thank you!");
      myProfile.gender = gender;
      break;
    } else {
      console.log("Please type in capital letter M, F or X");
    }
  }

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
  
  for (let i = 0; i < mockData.length; i++) {
    let matchObject = [];
  let i = 1;
    if (
      ((myProfile.age >= mockData[i].min_age_interest) && (myProfile.age <= mockData[i].max_age_interest))
      && ((mockData[i].age >= myProfile.min_age_interest) && (myProfile.age <= mockData[i].max_age_interest))
      && ((myProfile.gender_interest[0] == mockData[i].gender) || (myProfile.gender_interest[1] == mockData[i].gender))
      && ((mockData[i].gender_interest == myProfile.gender_interest[0]) || (mockData[i].gender_interest == myProfile.gender_interest[1]))
      && (myProfile.location === mockData[i].location)
    ) {
      console.log(`You've got a match named ${mockData[i].first_name} ${mockData[i].last_name} (${mockData[i].gender}) `);
      matchObject.push(mockData[i]);
      i++
    }

    else {
      mockData[i++];
    }
  }
  console.log(`You have a total of ${matchObject.length} matches!`)
  console.log('Here they are, enjoy!')
  console.table(matchObject);
  break;
}



// // https://stackoverflow.com/questions/46890943/accept-only-letters-in-a-prompt-box
// // function validate() {
// //   var name = prompt("Please enter your name.");
// //   var enquiry = prompt("Please tell us your enquiry.")

// //   if (name == null || name == "") {
// //     alert("You must enter your name into the prompt box!");
// //     validate()
// //   } else if (!/^[a-zA-Z]+$/.test(name)) {
// //     alert("Please only enter letters");
// //     validate()
// //   } else {
// //     alert("Your enquiry has gone through");
// //   }
// // }
// // let i = 1
// // mockData[i];
// const myProfile = {
//   first_name: 'Tom',
//   last_name: 'Koenen',
//   age: 44,
//   gender: 'M',
//   gender_interest: ['M','F'],
//   location: 'city',
//   min_age_interest: 17,
//   max_age_interest: 104
// }
    
// const mockData = require('./mockData.js').data;

//   while(true){
//   for (let i = 0; i < mockData.length; i++) {
//   let matchObject = [];
//   let i = 0;
//     if (
//       ((myProfile.age >= mockData[i].min_age_interest) && (myProfile.age <= mockData[i].max_age_interest))
//       && ((mockData[i].age >= myProfile.min_age_interest) && (myProfile.age <= mockData[i].max_age_interest))
//       && ((myProfile.gender_interest[0] == mockData[i].gender) || (myProfile.gender_interest[1] == mockData[i].gender))
//       && ((mockData[i].gender_interest == myProfile.gender_interest[0]) || (mockData[i].gender_interest == myProfile.gender_interest[1]))
//       && (myProfile.location === mockData[i].location)
//     ) {
//       console.log(`You've got a match named ${mockData[i].first_name} ${mockData[i].last_name} (${mockData[i].gender}) `);
//        matchObject.push(mockData[i]);
//       i++
//     }

//     else {
//       mockData[i++];
//     }
  
//   console.log(`You have a total of ${matchObject.length} matches!`)
//   console.log('Here they are, enjoy!')
//   console.table(matchObject);
//   break;
// }
//   }

//////////////////////////////////////////////////////////
// // console.log(mockData);
// // console.log(mockData[1]);
// // console.log(newProfile.gender_interest[0]);

// while(true){
//   if ((newProfile.gender_interest[0] || newProfile.gender_interest[1]) === mockData[0].gender){
//   console.logconsole.log("Match!");
//   break;}
// }


// /*
// while(true){
//   if ((newProfile.gender === mockData[1].gender_interest) && (newProfile.gender_interest === mockData[1].gender) && (newProfile.location === mockData[1].location)){
//     console.log("Match!");
//     break;
//   } else {
//     console.log ("Too bad, no match")
//     break;
//   }
// }
// */


// // if (newProfile.gender === mockData.gender_interest){
// //   console.log ("match!");
// // }
// /*




// const firstName = prompt("Please tell me your first name?");
// console.log(`Welcome to our dating app ${firstName}! We'll gonna do our best to find you some matches.`)

// const lastName = prompt("And what is your last name?");
// const age = Number(prompt("How old are you?"));
// const gender = prompt("Since I have no visuals or databank of male and female names, would you be so kind to tell me your gender? I can only process M,F or X. Please don`t be offended as X stands for all other genders which we respect.");
// const genderInterest = prompt("What sex are you interested in M, F, B or X?");

// const location = prompt("Please choose your location, rural or city?");
// const min_age_interest = Number(prompt("What minimal age do you like your match to have?"));

// const max_age_interest = Number(prompt("What maximal age does your match need to be?"));


// const newProfile = {
//   first_name: 'Tom',
//   last_name: 'Koenen',
//   age: 44,
//   gender: 'M',
//   gender_interest: 'V',
//   location: 'city',
//   min_age_interest: 17,
//   max_age_interest: 104
// }*/

// // What needs to be compared?
// //   - genderInterest (myProfile.gender === mockData.gender_interest)
// // Your code here
// // const answer = prompt("What is your name?");

// // console.log(mockData);