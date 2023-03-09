const express = require('express')

const router = express.Router()
const base = "/usuario"

router.get('/criar', (req, res) => {
  res.send('Usuário!')
})

module.exports = router