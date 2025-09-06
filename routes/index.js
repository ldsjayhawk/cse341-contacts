const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World');}); // default route

router.use('/contacts', require('./contacts'));

// router.get('/contacts', (contactsController) )
// // Route to build inventory by classification view
// router.get("/contacts/:_Id", contactController.);

module.exports = router;