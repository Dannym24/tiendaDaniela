
const express = require('express');
const app = express();

const connection= require('./knex')['development'];
const database= require('knex')('connection');
app.use(express.json())

app.get('/'), (req,res)=>{
  res.json({
    message: 'GET home route working fine'
  });
};


app.listen(3000, () => {
  console.log(`Server Running`);
});

//usuarios

app.post('/usuarios', (req, res) =>{
  const toCreate = req.body
  database('usuarios').Insert(toCreate)
  .then('usuarios') ;{
    res.json(usuarios)

  }
})

app.post('/empresas', (req, res) =>{
  const toCreate = req.body
  database('empresas').Insert(toCreate)
  .then('empresas') ;{
    res.json(empresas)

  }
})







