import express from "express";
import mongoose from "mongoose"; 
import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

const dbURI = "mongodb://127.0.0.1:27017/your_db_name"; 

mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });