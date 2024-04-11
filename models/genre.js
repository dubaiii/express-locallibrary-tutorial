const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});

// 虚拟属性'generename'：表示流派名称
GenreSchema
  .virtual("genrename")
  .get(function () {
    return this.name;
});

GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);