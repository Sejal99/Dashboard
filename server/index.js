const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const dotenv=require("dotenv");
dotenv.config()
const app = express();

 app.use(cors('http://localhost:5173'));



app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get("/", (req, res)=>{
  res.json('Server is Live');
})

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" })
 .then(()=>console.log('database connected'))
 .catch((err)=>console.log(err))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port ' +  port));
