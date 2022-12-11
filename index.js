require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const multer = require("multer");
const fs = require("node:fs");

const bikeRoutes = require("./routes/bikeRoutes");

app.use(multer().any());
app.use(cors());
app.use(express.json());
app.use("/bikes", bikeRoutes);
app.use(express.static(path.join(__dirname, "public")));

// Route for handling the file upload
app.post("/image", (request, response) => {
  // Get the file from the request
  const file = request.files[0];

  // Use the fs module to save the file to a desired location
  fs.writeFile(`./public/images/${file.originalname}`, file.buffer, (error) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send({
        message: "File uploaded successfully",
        filename: file.originalname,
      });
    }
  });
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
