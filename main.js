
const express = require('express');

const app = express()
const blogRoutes = require("./routes/blog");
const port = 3000

app.use(express.json());

app.use("/blogs", blogRoutes);

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log("hey its a get request")
  res.send('Hello World get')
}).post('/', (req, res) => {
  console.log("hey its a post request")
  res.send('Hello World post!')
})

app.put('/', (req, res) => {
  console.log("hey its a put request")
  res.send('Hello World put!')
})

app.get('/index', (req, res) => {
  console.log("hey its a index request")
  res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, d:4})
})

// app.get('/blog/:slug', (req, res) => {
//   // for url = http://localhost:3000/blog/intro%20to%20sunny?mode=dark&region=in
//   // logic to fetch intro to js from the db
//   console.log(req.params) // will output { slug: 'intro-to-padosi'}
//   console.log(req.query) // will output {mode: 'dark', region: 'in'}
//   res.send(`hello ${req.params.slug}!`)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
