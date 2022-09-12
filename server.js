const express=require("express")
const path= require("path")
const app=express()
app.use(express.json())
app.listen(5000,(err)=>{
    if(err)
    console.error(err)
    else 
    console.log('server is running on port 5000')
})

app.set('view engine', 'pug');
app.use('/',require('./routes/routes'))
