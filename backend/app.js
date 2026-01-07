

const express =  require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

//Middleweare
app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://uyangodanilan_db_user:fnfJvufgdYSKoBbr@cluster0.f7nulco.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));