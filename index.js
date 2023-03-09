const express = require('express')
const app = express()

const routes = require('./src/controllers')

app.use('/v1/', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
