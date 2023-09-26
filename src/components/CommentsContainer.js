import React from "react";
import CommentsList from "./CommentsList";
import { mockCommentsData } from "../utils/constants";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={mockCommentsData} />
    </div>
  );
};

export default CommentsContainer;
