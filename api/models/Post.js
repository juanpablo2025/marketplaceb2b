const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    price: {
      type: String,
      max: 500,
    },

    category: {
      type: String,
      max: 500,
    },
    size: {
      type: String,
      max: 500,
    },
    color: {
      type: String,
      max: 500,
    },
    inStock: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
