'use strict'
const express = require('express')
const router = express.Router()

router.use('/api/wallets', require('./wallets'))

module.exports = router
