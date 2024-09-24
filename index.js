// what is js?

// JavaScript is an scripting language, it is single threaded and works synchronously

// console.log("Hello world 1");

// // let promiseOne = new Promise((resolve, reject) => {
// //   resolve("Promise resolved"); // 0 seconds / 1 hr
// // });

// // console.log(promiseOne, "promiseOne");

// // promiseOne.then((response) => {
// //   console.log(response);
// // });

// setTimeout(() => {
//   console.log("hello from the set timeout");
// }, 0);

// console.log("Hello world 2");

// let promiseTwo = new Promise((resolve, reject) => {});

// console.log(promiseTwo, "promiseTwo");

// console.log("Hello world 3");

//

// function fetch(url) {
//   let promise = new Promise((resolve, reject) => {
//     // some server calls -> output
//     let output;

//     resolve(output);

//     reject(output);
//   });
// }

// let serverCall = fetch("https://reqres.in/api/users?page=2");

// console.log(serverCall, "serverCall promise");

// serverCall
//   .then((response) => {
//     let jsonOutput = response.json();

//     console.log(jsonOutput, "json call promise");

//     jsonOutput.then((res) => {
//       console.log(res);
//     });
//   })
//   .catch((error) => {
//     error;
//   });

// console.log("eeeee");
// console.log("fff");
// console.log("ggg");
// console.log("iiiii");
// console.log("pppp");

// console.log("hello world");

// async function fetchData() {
//   console.log("From fetch function"); // suync

//   let responseObject = await fetch("https://reqres.in/api/users?page=2");

//   // skipping, .then(function) -> await

//   let jsonResponse = await responseObject.json();

//   console.log(jsonResponse);
//   console.log("From fetch function 2"); //

//   // promise -> response object
// }

// fetchData();

// console.log("eeeee");
// console.log("fff");
// console.log("ggg");
// console.log("iiiii");
// console.log("pppp");

// let responseObject = null;

// let output = setTimeout(function () {
//   responseObject = "Something";

//   console.log(responseObject);
// }, 5000);

// console.log(responseObject);

// function login(email, password) {
//   // storage

//   // email and password

//   // both are correct
//   if (email && password) {
//     return "Correct";
//   }

//   // email or password is missing
//   if (email || password) {
//     return "Share all details";
//   }

//   // password is incorrect
//   if (email && password !== false) {
//     return "Enter correct password";
//   }
// }

// If I am giving an input and getting an output - no error

// let dataFetch = fetch("https://reqres.in/api/users?page=2");

// dataFetch
//   .then((response) => {
//     console.log(response); // payment thing

//     response.email = "shiva@guvi.com";

//     // if (response.redirected === false) {
//     //   throw new Error("Redirected is false"); // artifical
//     // }

//     if (response.email === undefined && response.password === undefined) {
//       throw new Error("Provide all information"); // artifical
//     }

//     if (response.email !== "shiva@guvi.in") {
//       throw new Error("Email is wrong");
//     }

//     let math = 5 + 5;
//     console.log(math);

//     // user is paid
//   })
//   .catch((error) => {
//     console.log(error, "error message");
//   });

// http method: - GET, POST, PUT, PATCH, DELETE, etc

let object = {
  name: "GUVI",
  age: 20,
};

let serverDataOne = fetch("https://reqres.in/api/users?page=2"); // get http method

let serverDataTwo = fetch("https://reqres.in/api/users?page=2", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    // authorization: "some token",
  },
  body: JSON.stringify(object), // stringified
});

let serverDataThree = fetch("https://reqres.in/api/users?page=2&id=2", {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    // authorization: "some token",
  },
  body: JSON.stringify({
    name: "Shiva",
  }), // stringified
});

let serverDataFour = fetch("https://reqres.in/api/users?page=2&id=6", {
  method: "DELETE",
});

let serverDataFive = fetch("https://reqres.in/api/users?page=2&id=8", {
  method: "PATCH",
  headers: {
    "Content-type": "application/json",
    // authorization: "some token",
  },
  body: JSON.stringify({
    age: 55,
    name: "Shiva",
    city: "Mumbai",
  }), // stringified
});

// JSON.parse(body); - Server side
// body.name = "SHiva"

// Two people/more can have same name

let users = [
  { id: 1, name: "GUVI", age: 20 },
  {
    name: "Shiva",
  },
  { id: 3, name: "GUVI", age: 20 },
  { id: 4, name: "GUVI", age: 20 },
  { id: 5, name: "GUVI", age: 20 },
  //   { id: 6, name: "GUVI", age: 20 },
  { id: 7, name: "GUVI", age: 20 },
  { id: 8, name: "GUVI", age: 55, city: "Mumbai" },
];

// logging into the application
// email and password -> data to be processed (POST)
