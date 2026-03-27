const express = require('express')
const app = express()
const port = 3000
//router


app.get('/', (req, res) => {
   let date=new Date();

  let currentDate=date.toDateString();
  let currentTime=date.toLocaleTimeString();

  



  res.send(`Hello World! Today is ${currentDate} and the time is ${currentTime}.`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
//middleware is function that wrtitten before the sending response to the client and it can modify the request and response objects. It can also end the request-response cycle or call the next middleware function in the stack. 
// Middleware functions are executed in the order they are added to the application. They can be used for various purposes such as logging, authentication, error handling, etc.
app.use((req, res, next) => {s
  console.log('request received at ' + new Date().toISOString());
  next();
})
//use of next pass controll to next function
//router
app.get('/home', (req, res) => {
    res.send('Welcome to the home page!')
})