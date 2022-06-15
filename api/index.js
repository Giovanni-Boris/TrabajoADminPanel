const express= require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require('./routes/user');
const productRoute = require("./routes/product");
const cors = require("cors");
dotenv.config();

const option = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.MONGO_URL,option)
    .then(()=> console.log('Base de datos conectada'))
    .catch(error => console.log('Error db: ', error))
// cors 
const  corsOption = {
    origin: '#',
    optionsSuccessStatus:200
}
app.use(cors({corsOption}))
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Backend server is running");
 }); 