const express = require('express');
const inventory = require('./inventory.js');

const server = express()

server.use(express.json()); //automates json handling

server.post('/inventory', (req,res) => {
    const newItem = req.body;
    newItem.id = inventory.length +1;
    inventory.push(newItem);
    res.json({message:'Product Added', item:newItem})
});


server.get('/inventory',(req,res)=>{
    res.json(inventory)
});


server.listen(3000,() =>{
console.log("Sever up on port 3000")
});

