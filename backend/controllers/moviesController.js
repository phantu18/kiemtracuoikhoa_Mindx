const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMovie = async (req, res) => {
  const existingMovie = await Movie.findOne({ name: req.body.name });
  if (existingMovie) {
    return res.status(400).json({ message: "Bị Trùng phim !!" });
  }
  const movie = new Movie({
    name: req.body.name,
    time: req.body.time,
    year: req.body.year,
    image: req.body.image,
    introduce: req.body.introduce,
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie)
      return res.status(404).json({ message: "Tên phim không xác định !!" });

    movie.name = req.body.name || movie.name;
    movie.time = req.body.time || movie.time;
    movie.year = req.body.year || movie.year;
    movie.image = req.body.image || movie.image;
    movie.introduce = req.body.introduce || movie.introduce;

    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie)
      return res.status(404).json({ message: "Phim không tìm thấy !!!" });

    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã Xóa phim thành công!!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const searchMovies = async (req, res) => {
  try {
    const query = req.query.q;
    const movies = await Movie.find({ name: new RegExp(query, "i") });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const sortByYear = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ year: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
  sortByYear,
};
