const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World');}); // default route


// router.get('/contacts', )
// // Route to build inventory by classification view
// router.get("/contacts/:_Id", contactController.);

module.exports = router;