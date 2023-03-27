const http=require("http")
const url=require("url")
let data1=require("./filemodule")
const server=http.createServer(async(req,res)=>{
   let data= url.parse(req.url,true)
    if(data.pathname==="/api/jokes")
    {
        let Array=[]
           console.log("Inside path.")
            for(let i=0; i<data.query.count; i++){
            let info= await data1()
             let object={
                id:info.id,
                value:info.value
             }
             Array.push(JSON.stringify(object))
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(Array))
    }
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("3050 is running")
})