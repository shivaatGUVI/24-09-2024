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

console.log("hello world");

async function fetchData() {
  console.log("From fetch function"); // suync

  let responseObject = await fetch("https://reqres.in/api/users?page=2");

  // skipping, .then(function) -> await

  let jsonResponse = await responseObject.json();

  console.log(jsonResponse);
  console.log("From fetch function 2"); //

  // promise -> response object
}

fetchData();

console.log("eeeee");
console.log("fff");
console.log("ggg");
console.log("iiiii");
console.log("pppp");

// let responseObject = null;

// let output = setTimeout(function () {
//   responseObject = "Something";

//   console.log(responseObject);
// }, 5000);

// console.log(responseObject);
