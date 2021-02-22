const express = require('express')
const app = express()
const fakeApi = require('./fakeApi')

app.get('/', (req, res) => {

  const selectedNews = []
  const indexes = []

  for(let i=0; i < 3; i++){
    let randomValue = ~~(Math.random() * 11)

    if(indexes.indexOf(randomValue) == -1){
      indexes.push(randomValue)
    }else {
      if(randomValue < 9){
        indexes.push(randomValue + 1)
      }else {
        indexes.push(randomValue - 1)
      }
    }
  }

  indexes.map(index => {
    selectedNews.push(fakeApi[index])
  })

  res.send(selectedNews)
})

app.listen(process.env.PORT || 3000)