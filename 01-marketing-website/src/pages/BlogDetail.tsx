import { format } from "date-fns";
import React from "react";
import { useParams } from "react-router";
import { Posts } from "../const";

function BlogDetail() {
  const { id }: any = useParams();
  const post = Posts.find((p) => {
    return p._id === id;
  });

  return (
    <div className="px-80 my-16">
      <div>
        <div>
          <div className="text-secondary border-double border-b-4 border-secondary pb-4 mb-16">
            <p className="text-5xl">{post?.title}</p>
            <p>by {post?.author.name}</p>
            <p className="">
              {format(new Date(post?._enabledAt as any), "LLL dd, yyyy")}
            </p>
            <p>Tags: {post?.tags.map((t) => t.name).join(", ")}</p>
          </div>

          <div
            className="text-secondary text-justify"
            dangerouslySetInnerHTML={{ __html: post?.bodyHtml || "" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
