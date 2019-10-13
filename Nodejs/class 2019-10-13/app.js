const express = require('express')
const server = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://demo18b:demo18b@ds135820.mlab.com:35820/demo-18b', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });
const User = mongoose.model('User', { name: String, age : Number, class : Number, subject : String });

server.use(express.static('public'))

server.use((req, res, next) => {
    console.log(req.url)
    // res.send('middleware executed')
    next()
})

server.use((req, res, next) => {
    console.log(req.method)
    next()
})

// server.use((req, res, next) => {
    //     setTimeout(()=> {
        //         next()
        //     },3000)
        // })
        
server.get('/', (req, res) => res.send('Hello World!'))

server.get('/addCat', (req, res) =>{
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then((doc) => {
        console.log('meow')
        res.send(doc)
    });
})

server.get('/getCats', (req, res) =>{
    Cat.find({name:"test"},(err, docs) => {
        // console.log(docs)
        // console.log(err)
        res.json(docs)
    })
})

server.get('/abc', (req, res) => res.send('Abc Page'))
// server.post('/abc', (req, res) => res.send('Abc Page'))
// server.put('/abc', (req, res) => res.send('Abc Page'))

server.get('/addUser', (req, res) =>{
    const user = new User({
        "name": req.query.name,
        "age": req.query.age,
        "class": req.query.class,
        "subject": req.query.subject
    });
    user.save().then((doc) => {
        res.send(doc)
    });
})

server.get('/getUser', (req, res) =>{
    const userQuery = {};
    if(req.query.name){
        userQuery.name = req.query.name
    }
    if(req.query.age){
        userQuery.age = req.query.age
    }
    if(req.query.class){
        userQuery.class = req.query.class
    }
    if(req.query.subject){
        userQuery.subject = req.query.subject
    }
    User.find(userQuery).then((doc) => {
        res.send(doc)
    });
})

server.get('/deleteUser', (req, res) =>{
    const userQuery = {};
    if(req.query.name){
        userQuery.name = req.query.name
    }
    if(req.query.age){
        userQuery.age = req.query.age
    }
    if(req.query.class){
        userQuery.class = req.query.class
    }
    if(req.query.subject){
        userQuery.subject = req.query.subject
    }
    User.remove(userQuery, {multi : true}).then((doc) => {
        res.send("deleted")
    });
})

server.listen(port)

server.use((error, req, res, next) => {
    res.send(error)
})