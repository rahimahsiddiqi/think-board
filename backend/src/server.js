import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors(
  {
    origin:"http://localhost:5173", // Allow requests from the frontend
  }
));
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter); 

//our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();

// });

app.use("/api/notes", notesRoutes);


//once data base is connected, then the application should
connectDB().then((() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
}))


/*
  REST API
  uses HTTP methods:
  - GET
  - POST
  - PUT 
  - DELETE

    200 OK
    201 Created
*/
// mongodb+srv://rahimahsiddiqi:<db_password>@cluster0.s8dlauc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0