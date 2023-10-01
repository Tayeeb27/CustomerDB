const Customer = require('../models/Customer');
const bcrypt = require('bcrypt');
const getUserByEmail = async (req, res) => {
  try {
     const user = await Customer.getUserByEmail(req.body);
     if (!user) {
       return res.status(401).json({ error: 'Authentication failed' });
     }
     const passwordMatch = bcrypt.compare(req.body.Password, user[0].password);
     console.log(passwordMatch)
     if (passwordMatch) {
       res.status(200).json({ message: 'Authentication successful' });
     } else {
       res.status(401).json({ error: 'Authentication failed' });
     }
  } catch (error) {
     console.error('Error during login:', error);
     res.status(500).json({ error: 'Internal server error' });
  }
 }
  const index = async (req, res) => {
    try {
      const customersData = await Customer.getCustomer()
      res.status(200).send(customersData )
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
  module.exports ={getUserByEmail, index}