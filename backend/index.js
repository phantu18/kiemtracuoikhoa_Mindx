const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
dotenv.config();
const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB  OK !!"))
  .catch((err) => console.error("Lỗi MongoDB", err));

app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
