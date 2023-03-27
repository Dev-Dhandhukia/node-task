const http = require("http");
const url = require("url");
const request = require('request');

const getRandomJoke = () => {
  return new Promise((resolve, reject) => {
    request('https://api.chucknorris.io/jokes/random', function (error,response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}; 
module.exports=getRandomJoke