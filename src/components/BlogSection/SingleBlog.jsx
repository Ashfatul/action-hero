import React from "react";

export default function SingleBlog({ blog }) {
  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body text-left">
        <h2 className="card-title">{blog.question}</h2>
        <p>{blog.answer}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
