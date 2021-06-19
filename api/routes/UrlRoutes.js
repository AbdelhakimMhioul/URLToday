const router = require('express').Router()
const UrlController = require('../controllers/UrlController')

router.get('/', UrlController.get_index)
router.get('/:id', UrlController.get_shorturl)
router.post('/', UrlController.post_shortenurl)
router.delete('/:id', UrlController.delete_url)

module.exports = router