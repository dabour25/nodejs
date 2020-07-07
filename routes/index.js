var express = require('express');
var router = express.Router();
var methodOverride = require("method-override");

router.use(methodOverride("_method"))

let indexController=require('../controllers/indexController');
/* GET home page. */
router.get('/', indexController.index);
router.post('/', indexController.store);
router.get('/:email_id/edit', indexController.edit);
router.put('/:email_id', indexController.update);
router.delete('/:email_id', indexController.destroy);

module.exports = router;
