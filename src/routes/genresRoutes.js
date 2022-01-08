const express = require('express');
const router = express.Router();
const {list,detail} = require('../controllers/genresController');

router.get('/genres', list)
router.get('/genres/detail/:id', detail)


module.exports = router;