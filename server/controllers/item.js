// const ObjectId = require('mongodb').ObjectID
const Item = require('../models/item')

const createItem = function(req,res) {
  Item.create({
    name  : req.body.name,
    price : req.body.price,
    description : req.body.description,
    codeItem : req.body.codeItem,
    image : req.body.image,
    stock : req.body.stock

  },(err,result)=>{
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

const viewItem = function(req,res){
  Item.find({},function(err,result){
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  })
}

const editItem = function(req,res){
  Item.updateOne(req.params.id),{
    name  : req.body.name,
    price : req.body.price,
    description : req.body.description,
    codeItem : req.body.codeItem
  },(err,result)=>{
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  }
}

module.exports = {
  createItem,
  viewItem,
  editItem
}
