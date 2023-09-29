const dotenv = require('dotenv')
dotenv.config()

const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Express departing now from port ${port}!`))