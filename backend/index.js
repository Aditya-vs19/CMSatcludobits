import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
console.log(process.env) // to verify that env variables are loaded
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is app listening on port ${port}`)
})