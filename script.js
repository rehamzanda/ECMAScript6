let user = {
    name: "John",
    years: 30
  }
//Exercise1
//Write the destructuring assignment that reads:
//name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable isAdmin (false if absent)

var {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);


//Exercise 2
//Give the right name:
//Create the variable with the name of our planet. How would you name such a variable?
//Create the variable to store the name of the current visitor. How would you name that variable?

/*const ourPlanet = "Earth";
let currentVisitor = "Rubby";

let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}
sayHi()*/

//Exercise 3
//Look at the code. What will be result of the call at the last line and why?
// the output is Hello John, as the phrase is hello which is true

/*Exercise 4
Write the code, one line for each action:

1-Create an empty object user.
2-Add the property name with the value John.
3-Add the property surname with the value Smith.
4-Change the value of the name to Pete.
5-Remove the property name from the object.*/

let obUser={};
let firstName = "John"
let surname  = "Smith"
obUser = {firstName, surname}
console.log(obUser);
obUser.firstName = "Pete";
console.log(obUser);
delete obUser.firstName;
console.log(obUser);


//Exercise 5
//Is it possible to change an object declared with const, how do you think and why?
/*const user = {
    name: "John"
  }
  user.name = "Pete"*/

  // the constant variable can not be reassigned to a new value, use let instead


//Exercise 6
//We have an object storing salaries of our team:

  //Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.


    let salaries = {
        Fred: 100,
        Ted: 160,
        Ghaith: 130
      }
    let sum=0;
    const keys = Object.keys(salaries);
    console.log(keys);
    keys.forEach((key) => {
        sum+= Number(salaries[key]);
       
    });
    console.log("Total salaries:", sum);

//Exercise 7
//Rewrite this if using the ternary operator '?':
let a= 1;
let b= 2;
let result;
/*if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }*/

result=(a + b < 4)?'Below':'Over';
console.log(result);

//Exercise 8
//Rewrite if..else using multiple ternary operators '?'.

/*let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
let login= '';
let message =(login == 'Employee')?'Hello':(login == 'Director')?'Greetings':(login == '')?'No login':'';
console.log(message)