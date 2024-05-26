const express = require('express');
const router = express.Router();
const { createProperty, getProperties, updateProperty, deleteProperty, likeProperty } = require('../controllers/propertyController');
const auth = require('../middleware/auth');

router.post('/', auth, createProperty);
router.get('/', getProperties);
router.put('/:id', auth, updateProperty);
router.delete('/:id', auth, deleteProperty);
router.post('/:id/like', likeProperty);

module.exports = router;
