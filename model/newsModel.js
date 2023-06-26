import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    newsTitle: {
      type: String,
      required: true,
    },
    newsID: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    newsArticle: {
      type: String,
      required: true,
    },
    newsAuthor: {
      type: String,
      required: true,
    },
    newsLocation: {
      type: String,
      required: true,
    },
    newsCategory: {
      type: String,
      enum: ["Sports", "Politics", "Cinema", "Economics"],
      required: true,
    },
  },
  {
    collection: "news",
  }
);

const newsModel = mongoose.model("news", newsSchema);

export default newsModel;