
// SALES
const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);


exports.getAllEmpresas=(req,res)=>{
    database('sales').then((sales)=>{
        res.json(sales)
    })
};

exports.getSalesById=(req,res)=>{
    const {id} = req.params
    database('sales')
    .where ({ id_sales: id})
    .then((getSalesById)=>{
        res.json(getSalesById)
    })
};

exports.post_Sales=(req,res)=>{
    const toCreate = req.body
    database('sales').insert(toCreate)
        .then ((sales)=>{
            res.json(this.post_Sales)
    })
};

exports.put_Sales=(req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('sales')
        .where ({id_sales: id})
        .update (toEdit)
        .then((put_Sales)=>{
        res.json(put_Sales)
    })
};

exports.delete_Sales=(req,res)=>{
    const {id} = req.params
    database('sales')
        .where ({id_sales: id})
        .del()
        .then((delete_Sales)=>{
            res.json(sales)
    })
};