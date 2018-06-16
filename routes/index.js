/**
 * Module Dependencies
 */
const errors = require('restify-errors')

/**
 * Model Schema
 */
const Pet = require('../models/pets')

module.exports = function (server) {
  /**
 * LIST
 */
  server.get('/pets', (req, res, next) => {
    Pet.apiQuery(req.params, function (err, docs) {
      if (err) {
        return next(
          new errors.InvalidContentError(err.errors.name.message)
        )
      }

      res.send(docs)
      next()
    })
  })

  /**
 * POST
 */
  server.post('/pets', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError("Expects 'application/json'")
      )
    }

    let data = req.body || {}

    let pet = new Pet(data)
    pet.save(function (err) {
      if (err) {
        return next(new errors.InternalError(err.message))
      }

      res.send(201)
      next()
    })
  })

  /**
 * GET
 */
  server.get('/pets/:pet_id', (req, res, next) => {
    Pet.findOne({ _id: req.params.pet_id }, function (err, doc) {
      if (err) {
        return next(
          new errors.InvalidContentError(err.errors.name.message)
        )
      }

      res.send(doc)
      next()
    })
  })

  /**
 * UPDATE
 */
  server.put('/pets/:pet_id', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError("Expects 'application/json'")
      )
    }

    let data = req.body || {}

    if (!data._id) {
      data = Object.assign({}, data, { _id: req.params.pet_id })
    }

    Pet.findOne({ _id: req.params.pet_id }, function (err, doc) {
      if (err) {
        return next(
          new errors.InvalidContentError(err.errors.name.message)
        )
      } else if (!doc) {
        return next(
          new errors.ResourceNotFoundError(
            'The resource you requested could not be found.'
          )
        )
      }

      Pet.update({ _id: data._id }, data, function (err) {
        if (err) {
          return next(
            new errors.InvalidContentError(err.errors.name.message)
          )
        }

        res.send(200, data)
        next()
      })
    })
  })

  /**
 * DELETE
 */
  server.del('/pets/:pet_id', (req, res, next) => {
    Pet.remove({ _id: req.params.pet_id }, function (err) {
      if (err) {
        return next(
          new errors.InvalidContentError(err.errors.name.message)
        )
      }

      res.send(204)
      next()
    })
  })
}
