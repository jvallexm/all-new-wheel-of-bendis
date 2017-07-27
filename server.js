var path = require('path');
var express = require('express');
var app = express(); 
var env = require('dotenv').config();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = process.env.MONGO_URL;

const server = app
  .use(express.static(__dirname))
  .listen(process.env.PORT, () => console.log(`Listening on ${ process.env.PORT }`));
var url = process.env.MONGO_URL;

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    
    console.log("new connection: " + socket.id);
    socket.on("send me characters",()=>{
        MongoClient.connect(url, (err,db)=>{
           if(err)
             console.log(err);
           else
           {
               var characters = db.collection('characters');
               var getAll = ()=> {
                   characters.find({},{})
                             .toArray((err,data)=>{
                                if(err)
                                  console.log(err);
                                else
                                {
                                    console.log("got characters from database");
                                    socket.emit("get characters",{
                                       characters: data 
                                    });
                                    db.close();
                                }
                             })
               };
               getAll(db);
           }
        });
    });
    
});
    