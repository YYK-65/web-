const express = require("express")
const mysql = require('mysql')

const app = express()
const db = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'Yyk2002,.',
  database:'categorylist'
})

app.get('/tudi',(req,res)=>{
  const sqlstr = 'select * from category'
  db.query(sqlstr,(err,results)=>{
    if (err) return console.log(err.message)
    res.send(results)
  })
})

app.get('/classify',(req,res)=>{
    const sqlstr = 'select * from classify'
    db.query(sqlstr,(err,results)=>{
      if (err) return console.log(err.message)
      res.send(results)
    })
  })

  app.get('/product',(req,res)=>{
      const sqlstr = 'select * from product'
      db.query(sqlstr,(err,results)=>{
        if (err) return console.log(err.message)
        res.send(results)
      })
    })

app.listen(80,()=>{
  console.log("server running at http://127.0.0.1:80")
})