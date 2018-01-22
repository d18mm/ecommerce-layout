const express = require('express');
const router = express.Router();

const itemControllers = require('../controllers/item')

router.post('/',itemControllers.createItem)
router.get('/',itemControllers.viewItem)
//router.put('/',controllers.editItem)



module.exports = router;
