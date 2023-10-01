const Customer = require('../models/Customer');
const bcrypt = require('bcrypt');
const index = async (req, res) => {
  try {
    const customersData = await Customer.getAll()
    res.status(200).send(customersData )
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const show = async (req, res) => {
    try {
      const customerId = parseInt(req.params.id)
      const selectedCustomer = await Customer.findById(customerId)
      res.status(200).send( selectedCustomer)
    } catch (err) {
      res.status(404).send({ error: err.message })
    }
  }
  
  const create = async (req, res) => {
    try {
      const data = req.body
      const newCustomer = await Customer.create(data)
      res.status(201).send({ data: newCustomer })
    } catch (err) {
      res.status(400).send({ jokerCreate: err.message })
    }
  }
  
  const update = async (req, res) => {
    try {
      const customerToUpdate = await Customer.findById(parseInt(req.params.id))
      req.body.age ||= customerToUpdate.age
      req.body.name ||= customerToUpdate.name
      const updatedCustomer = await customerToUpdate.update(req.body)
      res.status(200).send(updatedCustomer)
    } catch (err) {
      res.status(400).send({ jokerUpdate: err.message })
    }
  }
  
  const destroy = async (req, res) => {
    try {
      const { id } = req.params
      const customer = await Customer.findById(parseInt(id))
      await customer.destroy()
      res.status(204).end()
    } catch (err) {
      res.status(404).send({ error: err.message })
    }
  }
  
  
  module.exports = { index, show, create, update, destroy }