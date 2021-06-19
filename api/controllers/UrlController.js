const UrlModel = require('../models/UrlModel')

const get_index = async (req, res) => {
  const urls = await UrlModel.find()
  res.json({ urls })
}

const post_shortenurl = async (req, res) => {
  UrlModel.exists({ full: req.body.myurl }).then((result) => {
    if (!result) {
      UrlModel.create({ full: req.body.myurl })
    }
    get_index(req, res)
  })
}

const delete_url = async (req, res) => {
  await UrlModel.findByIdAndDelete(req.params.id)
  return res.json({ response: "OK" })
}

module.exports = { get_index, post_shortenurl, delete_url }