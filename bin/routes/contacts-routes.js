const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const contactsController = require('../controllers/contacts-controller');

router.get('/', contactsController.list);
router.get('/:id', contactsController.details);

router.post('/', [
    check('name')
    .isLength({ min: 4 })
    .withMessage("Your email isn't correct, the minimum is 4 letters"),
    
    check('email')
    .isEmail()
    .withMessage("Your email isn't correct"),
    
    check('subject')
    .isLength({ min: 4 })
    .withMessage("Please, choose an option"),
    
    check('message')
    .isLength({ min: 20, max: 500 })
    .withMessage("The message must be a minimum of 20 characters and a maximum of 500.")

], contactsController.create);

module.exports = router;