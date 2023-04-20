import React from "react";
import { useParams } from "react-router-dom";
export const PostDetails = () => {
  const params = useParams();
  const postId = params.postId;
  return <div>POST ID = {postId}</div>;
};
