const db = require('../database/connect')
const bcrypt = require('bcrypt')
class Customer {
  constructor(data) {
    this.CustomerID = data.CustomerID
    this.FirstName = data.FirstName
    this.LastName = data.LastName
    this.Email = data.Email
    this.Password = data.Password
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
      const hashedPassword = await hashPassword(data.Password);
      console.log(hashedPassword)
      const response = await db.query("INSERT INTO Customers(FirstName,LastName,Email,Password,Phone,Address,PostalCode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [data.FirstName, data.LastName, data.Email, hashedPassword, data.Phone, data.Address, data.PostalCode])
      return new Customer(response.rows)
    } catch (err) {
      throw new Error(err.message)
    }
  }
  async update(data) {
    try {
      const response = await db.query(" UPDATE Customers SET FirstName = $1, LastName = $2, Email = $3, Password = $4, Phone = $5, Address = $6, PostalCode = $7  WHERE id = $8 RETURNING * ", [data.FirstName, data.LastName, data.Email, data.Phone, data.Address, data.PostalCode, this.id])
      return new Customer(response.rows)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async destroy() {
    const response = await db.query("DELETE FROM Customers WHERE id = $1 RETURNING *", [this.CustomerID])
    return new Customer(response.rows)
  }
  static async getUserByEmail(data) {
    const query = 'SELECT Email, Password FROM Customers WHERE Email = $1';
    const result = await db.query(query, [data.Email]);
    console.log(result.rows);
    return result.rows;
  }
  async getCustomer(){
    const response = await db.query("SELECT * FROM Customers");
    if (response.rows.length === 0) {
      throw new Error("No Customers available.")
    }
    return response.rows;
  }
  }


async function hashPassword(password) {
  const saltRounds = 10; // Number of salt rounds for bcrypt
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

module.exports = Customer