const User = require('../Models/user');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);

// USUARIOS

exports.getAllUsers = (req,res)=>{
    database('user').then((user)=>{
        res.json(user)
    })
};

exports.getUserById = (req,res)=>{
    const {id} = req.params
    database('user')
    .where ({id_user: id})
    .then((getUserById)=>{
        res.json(this.getAllUsers)
    })
};

exports.post_Users = (req,res)=>{
    const toCreate = req.body
    database('user').insert(toCreate)
        .then ((post_Users)=>{
            res.json(post_Users)
    })
};

exports.put_Users = (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('user')
        .where ({id_user: id})
        .update (toEdit)
        .then((put_Users)=>{
        res.json(put_Users)
    })
};

exports.delete_Users = (req,res)=>{
    const {id} = req.params
    database('user')
        .where ({id_user: id})
        .del()
        .then((delete_Users)=>{
            res.json(delete_Users)
    })
};