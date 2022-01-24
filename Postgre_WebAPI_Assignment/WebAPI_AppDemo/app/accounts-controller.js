const { response } = require('express');
//const { account } = require('pg/lib/defaults');
const db = require('../db/models');
const Accounts = db.Accounts;


exports.findAll=(req,resp)=>{
    Accounts.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};
exports.findByPK=(req,resp)=>{
    const id = parseInt(req.params.id);
    Accounts.findByPk(id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};
exports.createAccounts=(req,resp)=>{

    if (!req.body.accno){
        resp.status(400)
        .send({message:"Account Name to be provided"});
        return;
    }
    const newAccounts={
        accno:req.body.accno,
        accname:req.body.accname,
        balance: req.body.balance,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newAccounts');
    Accounts.create(newAccounts)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};
exports.updateUser=(req,resp)=>{
    const aid = parseInt(req.params.id);
    Accounts.update(req.body,{ where:{ id:aid }})
        .then(num => {
            console.log('num' +num);
            if(num == 1){
                resp.send({message:`User with account id ${aid} updated sucessfully`});
            }
            else{
                resp.send({message:`User with account id ${aid} not updated sucessfully`});
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving Account data"
            });
        });
};
exports.delete=(req,resp)=>{
    const c_id = parseInt(req.params.id);
    Accounts.destroy({where:{id:c_id}})
    .then(num => {
        if (num == 1) {
          resp.send({ message: `Account with id=${c_id} deleted successfully!` });
        } else {
          resp.send({ message: `Cannot delete Account with id=${c_id}. Maybe Account was not found!` });
        }
      })
      .catch((err) => {
        resp.status(500).send({
          message: err.message || " Could not delete Account with id=" + c_id
        });
      });
};