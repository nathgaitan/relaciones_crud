const express = require('express');
const router = express.Router();
const {list, newest, recommended, detail, add, create, edit, update, destroy, remove} = require('../controllers/moviesController');

router.get('/', list)
router.get('/new', newest)
router.get('/recommended', recommended)
router.get('/detail/:id', detail)
router.get('/add', add)
router.post('/create', create)
router.get('/edit/:id', edit) 
router.put('/update/:id', update) 
router.get('/remove/:id', remove)
router.delete('/delete/:id', destroy)
    


module.exports = router;
