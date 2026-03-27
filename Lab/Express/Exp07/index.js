const express = require('express')
const app = express()
const port = 3000

const users = [
        { Id: 1, name: "pradip", age: 21, email: "pradip@example.com" },
        { Id: 2, name: "suyog", age: 20, email: "suyog@example.com" },
        { Id: 3, name: "swapnil", age: 30, email: "sappy@example.com" },
        { Id: 4, name: "andy", age: 100, email: "anurag@example.com" }
    ]

app.get('/', (req, res) => {
  res.send('Our Application is running on port 3000!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})



app.get('/user', (req, res) => {
    //we not use the res.send and res.json at same time 
    //res.send('Welcome to the user page!')
    

    res.json(users)
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.Id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
    

    



})
