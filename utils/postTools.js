import connectToDb from "../configs/db";
import postModel from '../models/post';

async function getAllPosts() {
  connectToDb();
  const posts = (await postModel.find({}).populate('user', "profileImage userName")).reverse()
  return posts;
}

async function getPost(postId) {
  connectToDb();
  const post = await postModel.findOne({ _id: postId });
  return post;
}

async function getUserPosts( userId ) {
  connectToDb();
  const posts = await postModel.find({ user: userId });
  return posts;
}




export { getAllPosts, getPost, getUserPosts };
