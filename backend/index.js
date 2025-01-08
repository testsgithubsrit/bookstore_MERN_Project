
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const mongodb = require("./db");

// Connect to MongoDB
mongodb();

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Allow React app origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("hello neha");
});

app.use("/api", require("./Routes/SignUp"));
app.use("/api", require("./Routes/Login"));
app.use("/api", require("./Routes/DisplayBooks"));
/*app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/Myorder"));*/

// Start Server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
