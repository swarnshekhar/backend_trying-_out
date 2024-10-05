require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello swarn!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello swarn u are handling your twitter!')
})
app.get('/login', (req, res) => {
  res.send('<h1>hii u can login here </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})