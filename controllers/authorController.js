var Book = require("../models/book");

const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.author_list = async function (req, res, next) {
    try {
      const list_authors = await Author.find().sort([["family_name", "ascending"]]).exec();
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    }
    catch (err) {
      return next(err);
    }
};

// Display detail page for a specific Author.
exports.author_detail = async function (req, res, next) {
  try {
    const author = Author.findById(req.params.id);
    const authors_books = Book.find({ author: req.params.id }, "title summary");

    // 使用 Promise.all 等待所有操作完成
    const results = await Promise.all([author, authors_books]);

    if (results[0] == null) { // No results.
      var err = new Error('Author not found');
      err.status = 404;
      return next(err);
    }

    // Successful, so render
    res.render('author_detail', { title: 'Author Detail', author: results[0], author_books: results[1] });
  } catch (err) {
    return next(err);
  }
};

// Display Author create form on GET.
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
});

// Handle Author create on POST.
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
});

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});
