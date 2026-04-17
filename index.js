const express = require('express');
const app = express();

const PORT = 4001

app.get('/', async(req , res)=>{
    res.send(`
        <h1>Welcome to my server</h1>
        <h3>he </he>
        <h2>name: suraj</h2>
        `)
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})