import mongoose, { Schema } from "mongoose";

interface IComments {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: string;
}

const CommentSchema: Schema = new Schema({});

const CommentsModel = mongoose.model<IComments>("Comments", CommentSchema);

export default CommentsModel;
