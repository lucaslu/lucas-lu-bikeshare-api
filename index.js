require("dotenv").config();

const express = require("express");
const path = require("node:path");
const cors = require("cors");
const bikeRoutes = require("./routes/bikeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/bikes", bikeRoutes);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
