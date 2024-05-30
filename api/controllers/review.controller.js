import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Post from "../models/post.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

  const newReview = new Review({
    userId: req.userId,
    postId: req.body.postId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      postId: req.body.postId,
      userId: req.userId,
    });

    if (review)
      return next(
        createError(403, "You have already created a review for this post!")
      );



    const savedReview = await newReview.save();

    await Post.findByIdAndUpdate(req.body.postId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ postId: req.params.postId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};