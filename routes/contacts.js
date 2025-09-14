const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts')

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getIndividual);

router.post('/', contactsController.addIndividual)
router.put('/:id', contactsController.updateIndividual)
router.delete('/:id', contactsController.deleteIndividual)

module.exports = router;