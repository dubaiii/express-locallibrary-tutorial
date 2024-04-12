var Book = require("../models/book");

const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");

// Display list of all Genre.
exports.genre_list = async function(req, res, next) {
  try{
    const list_genres = await Genre.find().sort([["name", "ascending"]]).exec();
    res.render("genre_list", {
      title: "Genre List",
      genre_list: list_genres,
    });
  } catch (err) {
    return next(err);
  }
};

// Display detail page for a specific Genre.
exports.genre_detail = async function (req, res, next) {
  try {
    const genre = Genre.findById(req.params.id);
    const genre_books = Book.find({ genre: req.params.id });

    // 使用 Promise.all 等待所有操作完成
    const results = await Promise.all([genre, genre_books]);

    if (results[0] == null) { // No results.
      var err = new Error('Genre not found');
      err.status = 404;
      return next(err);
    }

    // Successful, so render
    res.render('genre_detail', { title: 'Genre Detail', genre: results[0], genre_books: results[1] });
  } catch (err) {
    return next(err);
  }
};

// Display Genre create form on GET.
exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
});

// Handle Genre create on POST.
exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
});

// Display Genre delete form on GET.
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
});

// Handle Genre delete on POST.
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
});

// Display Genre update form on GET.
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
});

// Handle Genre update on POST.
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
});
