const guestController = require('../controllers/guest')
const router = require('express').Router()
router.get('/', guestController.index)
router.get('/contactUs', guestController.contactUs)
router.get('/hardForm', guestController.hardForm)
module.exports = router