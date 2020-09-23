const redis = require('redis')
const client = redis.createClient()


client.on("error", (err)=>{console.log(err)})

client.set("name", "Pankaj", (err, message)=>{
    if(err) throw err
    console.log(message)
})
 

client.get("name", redis.print)

 