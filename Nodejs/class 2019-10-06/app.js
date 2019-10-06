const express = require('express')
const server = express()
const port = 3000

server.use(express.static('public'))
server.use(express.static('css'))


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

server.get('/abc', (req, res) => res.send('Abc Page'))
// server.post('/abc', (req, res) => res.send('Abc Page'))
// server.put('/abc', (req, res) => res.send('Abc Page'))


server.listen(port)

server.use((error, req, res, next) => {
    res.send(error)
})