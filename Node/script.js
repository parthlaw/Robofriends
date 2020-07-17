const express= require('express');
const app=express();
const cors=require('cors');
const bp=require("body-parser")
const db=require('./db')
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
	res.send('Hi')
})
app.post('/Reg',(req,res)=>{
  const{name,email}=req.body
  db.query("INSERT INTO robots(name,email) VALUES($1,$2)",[name,email],(err,response)=>{console.log(err,response)} )
  res.json('success')
})
app.get('/card', (req, res, next) => {
  db.query('SELECT * FROM robots', [], (err, response) => {
    if (err) {
      return next(err)
    }
    res.send(response.rows)
  })
})

app.listen(3000)