const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(
    "mongodb://demo18b:demo18b@ds135820.mlab.com:35820/demo-18b"
)
.then(() => {
    console.log('Mongo is connected')
})


app.use(express.json())

let students = [
    {
        id:1,
        name:"Furqan"
    },
    {
        id:2,
        name:"Fatima"
    },
    {
        id:3,
        name:"Faizan"
    }
]
app.get('/student',(req,res) => {
    res.send(students)
})





require('./models/student');
const Student = mongoose.model('students')

app.post('/addStudent',(req,res) => {
    let data = {
        id: students.length + 1,
        name:req.body.name
    }

    new Student(data).save().then(() => {
        res.send('Student is added')
    })

    // students.push(data)
    // res.send(data)
})

app.put('/updateStudent/:id',(req,res) => {
    let findStudent = students.find(value => value.id == req.params.id )
    findStudent.name = req.body.name
    res.send(findStudent)

})

app.delete('/deleteStudent/:id', (req,res) => {

    Student.remove({id:req.params.id}).then(() => {
        res.send('Student is delete')
    })
    // let findStudent = students.find(value => value.id == req.params.id )
    // let findIndex = students.indexOf(findStudent);

    // students.splice(findIndex,1)
    // res.send(findStudent)


})

app.listen(4000, () => {
    console.log('Server is running in port 4000')
})














