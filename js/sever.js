import http from 'http'; //create http server 
import {tasks} from './tasks.js';
import {pen} from './tasks.js';
import express from "express"


const sever = http.createServer((req,res) => {
if (req.method=== "GET" && req.url ==="/tasks"){
    res.writeHead(200,{'Content-Type':'application/json'})
    //200 status code means ok, and were sending  data as json 
    res.end(JSON.stringify(tasks));
    // sends task we created earlier and are importing 
}else{
    res.writeHead(404,{'Content-Type':'application/json'})
    res.end(JSON.stringify({message: "Not Found"}));
}
});

sever.listen(3000,()=> {
console.log("Sever Running on port 3000")
});


// (req,res) = request and response.
//req stores data from incoming requests, i.e. url, GET
//res used to send data back, TASKS

