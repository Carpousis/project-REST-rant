const { Router } = require('express')

const router = require('express').Router()
router.get('/', (_req, res) => {
     let places = [{
         name: 'H-Thai-ML',
         city: 'Seattle',
         state: 'WA',
         cuisines: 'Thai, Pan-Asian',
         pic: '/images/casey-lee.jpg'
     }, {
         name: 'Coding Cat Cafe',
         city: 'Phoenix',
         state: 'AZ',
         cuisines: 'Coffee, Bakery',
         pic: '/images/derek-duran.jpg'
     }]
        res.render('places/index', { places })
 })

 router.get('/new', (req, res) => {
    res.render('places/new')
  })
  router.get('/:id', (req, res) => {
    res.render('GET /places/:id stub')
})
  

 router.post('/', (req, res) => {
    res.send('POST /places stub')
})
// router.get('/new', (req, res) => {
//     res.send('GET /places/new stub')
// })

// router.put('/:id', (req, res) => {
//     res.send('PUT /places/:id stub')
// })
// router.delete('/:id', (req, res) => {
//     res.send('DELETE /places/:id stub')
// })
// router.get('/:id/edit', (req, res) => {
//     res.send('GET /places/:id/edit stub')
// })
// router.post('/:id/rant', (req, res) => {
//     res.send('GET /places/:id/rant stub')
// })
// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })
module.exports = router