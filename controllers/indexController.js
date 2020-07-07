const models=require('../models');

exports.index = function(req, res, next) {
    models.emails.findAll().then(emails=>{
        res.render('index', { title: 'Amagdy First Node',emails:emails });
    });
};

exports.store = function (req,res,next) {
    let backURL=req.header('Referer') || '/';
    return models.emails.create({
        email:req.body.email
    }).then(index=>{
        res.redirect(backURL);
    });
};