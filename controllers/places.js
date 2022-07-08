const db = require('../models')
const router = require('express').Router()

router.get('/', (_req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch()
 })

 router.get('/new', (req, res) => {
    res.render('places/new')
  })

 router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'DC'
    }
    res.redirect('places/')
    res.send('POST / places stub')
})
router.get('/new', (req, res) => {
    res.render('places/new')
})
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
  })
  
  router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
  })
  
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
    })
  
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id })
        }
    })

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})
module.exports = router