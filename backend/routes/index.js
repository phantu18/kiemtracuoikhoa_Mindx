const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moviesController = require("../controllers/moviesController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.get("/", moviesController.getMovies);
router.post("/", upload.single("image"), moviesController.createMovie);
router.put("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);
router.get("/search", moviesController.searchMovies);
router.get("/sort-by-year", moviesController.sortByYear);
module.exports = router;
