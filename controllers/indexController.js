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

exports.edit = function(req, res, next) {
    models.emails.findAll().then(emails=>{
        let email=models.emails.findOne({where:{
                id:req.params.email_id
            }}).then(email=>{
            res.render('edit', { title: 'Amagdy First Node',emails:emails,email:email });
        });
    });
};

exports.update = function (req,res,next) {
    let backURL=req.header('Referer') || '/';
    return models.emails.update({
        email:req.body.email
        },{
        where: {
            id:req.params.email_id
        }
    }).then(index=>{
        res.redirect(backURL);
    });
};

exports.destroy = function (req,res,next) {
    let backURL=req.header('Referer') || '/';
    return models.emails.destroy({
        where: {
            id:req.params.email_id
        }
    }).then(index=>{
        res.redirect(backURL);
    });
};