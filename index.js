const express = require ('express')
const app = express()

app.use(express.static('public/'))

app.get('/',(req, res)=>{

    res.render('home.ejs')
})

app.get('/about',(req, res)=>{
    res.render('about.ejs')
})

app.get('/courses',(req, res)=>{
    res.render('courses.ejs')
})

app.get('/course-details', (req, res) => {

  const courses = [
    { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
    { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
    { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
  ]

  res.render('course-details.ejs', { courses })
})

app.use((req, res)=>{
    res.send("<h1>404 Page not found</h1>")
})


const PORT = 3000
const HOST = '127.0.0.1'

app.listen(PORT, HOST, ()=>{
    console.log(`server is running...http://${HOST}:${PORT}`)
})