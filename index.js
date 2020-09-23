const redis = require('redis')
const client = redis.createClient()

//Will listen to all errors occure in client
client.on("error", (err)=>{console.log(err)})

//Setting the data using set
client.set("name", "Pankaj", (err, message)=>{
    if(err) throw err
    console.log(message)
})
 
//Getting the values and printing using redis.print
client.get("name", redis.print)

 