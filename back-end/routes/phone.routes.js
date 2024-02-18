const express = require('express');
const { handleNotFoundError, handleServerError } = require('../error-handling/error.handler')

const router = express.Router();

const phonesData = require('../../data/phones.json');


router.get('/:_id', (req, res) => {
    try {
        const phoneId = req.params._id;
        console.log('phoneId:', phoneId);

        const filteredPhones = phonesData.filter(p => p.id === Number(phoneId));
        console.log('filteredPhones:', filteredPhones);

        if (filteredPhones.length > 0) {
            const phone = filteredPhones[0];
            console.log('phone', phone);
            res.json(phone);
        } else {
            handleNotFoundError(res);
        }
    } catch (error) {
        handleServerError(res, error);
    }
});

router.get('/', (req, res) => {
    try {
        setTimeout(() => {
            try {
                res.json(phonesData);
            } catch (error) {
                handleServerError(res, error);
            }
        }, 1000);
    } catch (error) {
        handleServerError(res, error);
    }
});



module.exports = router;