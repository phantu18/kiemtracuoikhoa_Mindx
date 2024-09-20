const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // tên đăng nhập mặc định là admin và password là 123456
  if (username === "admin" && password === "123456") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

router.post("/logout", (req, res) => {
  res.json({ message: "Logged out" });
});

module.exports = router;
