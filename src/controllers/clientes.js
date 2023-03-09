const express = require('express')
const logger = require('../configs/logger');

const router = express.Router()
const base = "/clientes"

const { connect } = require('../configs/mysql');
const connection = connect();

router.get('/:id', (req, res) => {
  const id = req.params.id
  const sql = `select * from clientes c where c.id = ?`

  connection.query(sql, [id], (error, results, fields) => {
    console.log(fields)
    if(error) throw error;
    res.send(results)
  })
  
})

router.get('/', (req, res) => {
  const id = req.params.id
  const sql = `select * from clientes`
  
  connection.query(sql, (error, results, fields) => {
    if(error) throw error;
    res.send(results)
  })

})

module.exports = router