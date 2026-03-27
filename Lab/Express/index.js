const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let date=new Date();

  let currentDate=date.toDateString();
  let currentTime=date.toLocaleTimeString();

  



  res.send(`Hello World! Today is ${currentDate} and the time is ${currentTime}.`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
