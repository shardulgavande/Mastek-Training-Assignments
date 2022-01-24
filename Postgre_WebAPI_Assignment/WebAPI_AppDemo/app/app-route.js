module.exports=(app)=>{
    const express = require('express');
    const ROUTER = express.Router();
    const AccountsController = require('./accounts-controller');
    const BooksController = require('./book-controller');
    
    /*Accounts Route*/ 
    ROUTER.get('/accounts',AccountsController.findAll);
    ROUTER.get('/accounts/:id',AccountsController.findByPK);
    ROUTER.post('/accounts/add',AccountsController.createAccounts);
    ROUTER.put('/accounts/update/:id',AccountsController.updateUser);
    ROUTER.delete('/accounts/delete/:id',AccountsController.delete);


    /*Books Route*/ 
    ROUTER.get('/books',BooksController.findAll);
    ROUTER.get('/books/:id',BooksController.findByPK);
    ROUTER.post('/books/add',BooksController.createBooks);
    ROUTER.put('/books/update/:id',BooksController.updateBook);
    ROUTER.delete('/books/delete/:id',BooksController.delete);
 
    
    app.use('/app',ROUTER);
}