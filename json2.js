const http=require("http")
const url=require("url") 
const request = require('request'); 
let getRandomJoke=require("./filemodule2")
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/api/jokes") {
      const jokes = [];
      for (let i = 0; i < parsedUrl.query.count; i++) {
        const joke = await getRandomJoke(); 
        let object={  
            id:joke.id,
            value:joke.value
           }
           jokes.push(JSON.stringify(object))
       // jokes.push(joke);
      }
      console.log("Inside path. ",jokes);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(jokes));
    }
  });
  
  server.listen(1000, "127.0.0.1", () => {
    console.log("Server is running on port 1000");
  });