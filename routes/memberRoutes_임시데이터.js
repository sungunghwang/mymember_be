const express = require('express');
const router = express.Router();
const members = require('../data/members');

router.get('/members', (req, res) => {
   res.json(members);
});

module.exports = router;
