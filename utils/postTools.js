import connectToDb from "../configs/db";
import postModel from "../models/post";

async function getAllPosts() {
  connectToDb();
  const posts = await postModel.find({});
  return posts;
}

async function getPost(postId) {
  connectToDb();
  const post = await postModel.findOne({ _id: postId });
  return post;
}

async function getUserPosts({ userId }) {
  connectToDb();
  const posts = await postModel.find({ user: userId });
  return posts;
}

async function likePost({ postId }) {
  connectToDb();
  await postModel.findOneAndUpdate({ _id: postId }, { $inc: { likes: 1 } });
}

async function disLikePost({ postId }) {
  connectToDb();
  await postModel.findOneAndUpdate({ _id: postId }, { $inc: { likes: -1 } });
}

export { getAllPosts, getPost, getUserPosts, likePost, disLikePost };
