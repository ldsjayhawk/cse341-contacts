const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World');}); // default route

module.exports = router;