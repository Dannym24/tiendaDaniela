const User = require('../Models/product');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PRODUCT
const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);

exports.getAllproduct = (req,res) => {
    database('product').then((product)=>{
        res.json(product)
    })
};

exports.getProductById = (req,res)=>{
    const {id} = req.params
    database('product')
    .where ({ id_product: id})
    .then((getProductById)=>{
        res.json(getProductById)
    })
};



exports.post_Product = (req,res)=>{
    const toCreate = req.body
    database('product').insert(toCreate)
    .then ((post_Product)=>{
        res.json(post_Product)
    })
};

exports.put_Product = (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('product')
        .where ({id_product: id})
        .update (toEdit)
        .then((put_Product)=>{
        res.json(put_Product)
    })
};

exports.delete_Product = (req,res)=>{
    const {id} = req.params
    database('product')
    .where ({ id_product: id})
    .del()
    .then((delete_Product)=>{
        res.json(delete_Product)
    })
};