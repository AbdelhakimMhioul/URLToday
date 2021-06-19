const UrlModel = require('../models/UrlModel')
const shortUrl = require('node-url-shortener')

const get_index = async (req, res) => {
  const urls = await UrlModel.find()
  res.json({ urls })
}

const get_shorturl = async (req, res) => {
  const url = await UrlModel.findById(req.params.id)
  url.clicks++
  url.save()
  return res.json({ response: "OK" })
}

const post_shortenurl = async (req, res) => {
  UrlModel.exists({ full: req.body.myurl }).then((result) => {
    shortUrl.short(req.body.myurl, (err, url) => {
      if (!result) {
        UrlModel.create({ full: req.body.myurl, short: url })
      }
      get_index(req, res)
    })
  })
}

const delete_url = async (req, res) => {
  await UrlModel.findByIdAndDelete(req.params.id)
  return res.json({ response: "OK" })
}

module.exports = { get_index, get_shorturl, post_shortenurl, delete_url }