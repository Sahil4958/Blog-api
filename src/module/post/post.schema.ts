import { model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: {
      type: String,
    },
    tags: { type: [String], required: true },

    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

export const Post = model("Post", postSchema);
