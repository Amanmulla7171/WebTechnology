//express is javscript framework which is used to create web application and api
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Our Application is running on port 3000!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


//routing in express
app.get('/home',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/about',(req,res)=>{
    res.send('welcome to about page')
})

app.get('/project',(req,res)=>{
    res.send('project no 1- express')
})

app.get('/research',(req,res)=>{
    res.send('research page ')
})