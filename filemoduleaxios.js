const axios = require('axios');
const data=()=>{
    return new Promise((resolve,reject)=>{
       const info= axios.get("https://api.chucknorris.io/jokes/random").then((res)=>{
            resolve(res.data) 
            return res.data
            
            //resolve(res.data.id)

         }).catch((err)=>{
             console.log(err)
           })
    }) }
    module.exports=data;