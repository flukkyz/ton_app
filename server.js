require('dotenv').config()
const express = require('express')
// const db = require('./models')
// const Cpi = db.Cpi

const { notFound, handleError } = require('./middlewares')


const port = process.env.PORT || 5000

const app = express()

app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
  try {
    // const lists = await Cpi.findAll()
    const lists = [
      {
        Full_Name: 'test1',
        Corporate_ID: 1
      },
      {
        Full_Name: 'test2',
        Corporate_ID: 2
      },
    ]
    return res.render('index', {
      cpis: lists
    });
  } catch (e) {
    e.message = 'Cannot get data from database. | ' + e
      next(e)
  }
})

app.use(notFound)
app.use(handleError)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
