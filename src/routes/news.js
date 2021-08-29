const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async (req, res) => {
  try {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
    res.render('news', { articles: newsAPI.data })
  } catch (err) {
    if (err.response) {
      res.render('news', {articles: null})
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.header)
    } else if (err.request) {
      res.render('news', {articles: null})
      console.log(err.request)
    } else {
      res.render('news', {articles: null})
      console.error('Error', err.message)
    }
  }
})

module.exports = newsRouter
