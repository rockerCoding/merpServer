const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

const routesPath = path.join(__dirname)

fs.readdirSync(routesPath).forEach(file => {
  if (file === 'index.js') return
  const route = require(path.join(routesPath, file))
  router.use('/' + file.replace(".js", ""), route)
})

module.exports = router
