const { response } = require('express');
const db = require('../db/models');
const Books = db.Books;


exports.findAll=(req,resp)=>{
    Books.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};

exports.findByPK=(req,resp)=>{
    const id = parseInt(req.params.id);
    Books.findByPk(id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                    `Something went wrong`})
        });
};
exports.createBooks=(req,resp)=>{

    if (!req.body.bookname){
        resp.status(400)
        .send({message:"Book Name to be provided"});
        return;
    }
    const newBooks={
        bookname:req.body.bookname,
        authorname:req.body.authorname,
        publicationdate: req.body.publicationdate,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log('newBooks');
    Books.create(newBooks)
        .then(data=>resp.send(data))
        .catch(err=>{
            resp.status(500)
            .send({message:err.message})
        });
};

exports.updateBook=(req,resp)=>{
    const aid = parseInt(req.params.id);
    Books.update(req.body,{ where:{ id:aid }})
        .then(num => {
            console.log('num' +num);
            if(num == 1){
                resp.send({message:`Book with book id ${aid} updated sucessfully`});
            }
            else{
                resp.send({message:`Book with book id ${aid} not updated sucessfully`});
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
    Books.destroy({where:{id:c_id}})
    .then(num => {
        if (num == 1) {
          resp.send({ message: `Book with id=${c_id} deleted successfully!` });
        } else {
          resp.send({ message: `Cannot delete Book with id=${c_id}. Maybe Book was not found!` });
        }
      })
      .catch((err) => {
        resp.status(500).send({
          message: err.message || " Could not delete Book with id=" + c_id
        });
      });
};
