const express = require('express')
const Plant = require('../../models/plant')

const router = express.Router()

router.get('/v1/plant', (req, res) => {
  res.send({ success: true })
})

router.get('/v1/plant/:id', (req, res) => {
  Plant.findById(req.params.id)
    .then((plant) => {
      res.send(plant)
    })
})

router.post('/v1/plant', (req, res) => {
  const plant = new Plant()
  plant.name = req.body.name
  plant.litersPerWatering = req.body.qty_liters_per_watering

  plant.save()
    .then(() => {
      res.send(plant)
    })
})

module.exports = router
