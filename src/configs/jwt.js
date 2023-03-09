const jwt = require('jsonwebtoken')

function generateToken(user) {
  const token = jwt.sign({ id: user.id }, 'chave-secreta', { expiresIn: '1h' })
  return token
}
