const router = require('express').Router()

router.get('/', (_req, res) => {
    res.send('GET/places')
})

module.exports = router