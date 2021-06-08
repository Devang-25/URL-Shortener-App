const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({ path: "./.env" });
const connectDB = require('./util/db')
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors());
connectDB();
app.use('/url', require('./Routes/shortener'));
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>  {console.log(`Server running on port ${PORT}`)})