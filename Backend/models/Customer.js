const db = require('../database/connect')

class Customer {
  constructor(data) {
    this.CustomerID = data.CustomerID
    this.FirstName = data.FirstName
    this.LastName = data.LastName
    this.Email = data.Email
    this.Phone = data.Phone
    this.Address = data.Address
    this.PostalCode = data.PostalCode
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM Customers");
    if (response.rows.length === 0) {
      throw new Error("No Customers available.")
    }
    return response.rows;
  }
  static async findById(id) {
    try {
      const CustomerData = await db.query('SELECT * FROM Customers WHERE CustomerID = $1', [id]) 
      console.log(CustomerData.rows);
      const Customer = new Customer(CustomerData.rows);
     
      return CustomerData.rows;
    } catch (err) {
      throw new Error('This Customer does not exist!');
    }
  }
  static async create(data) {
    try {
      const response = await db.query("INSERT INTO Customers(FirstName,LastName,Email,Phone,Address,PostalCode) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [data.FirstName, data.LastName, data.Email, data.Phone, data.Address, data.PostalCode])
      return new Customer(response.rows)
    } catch (err) {
      throw new Error(err.message)
    }
  }
  async update(data) {
    try {
      const response = await db.query(" UPDATE Customers SET FirstName = $1, LastName = $2, Email = $3, Phone = $4, Address = $5, PostalCode = $6  WHERE id = $7 RETURNING * ", [data.FirstName, data.LastName, data.Email, data.Phone, data.Address, data.PostalCode, this.id])
      return new Customer(response.rows)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async destroy() {
    const response = await db.query("DELETE FROM Customers WHERE id = $1 RETURNING *", [this.CustomerID])
    return new Customer(response.rows)
  }

}

module.exports = Customer