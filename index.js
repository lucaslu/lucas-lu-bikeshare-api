require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bikeRoutes = require("./routes/bikeRoutes");

app.use(cors());
app.use(express.json());
app.use("/bikes", bikeRoutes);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
