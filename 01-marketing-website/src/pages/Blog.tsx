import React from "react";
import { Posts } from "../const";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="px-80">
      <div>
        <div>
          <div>
            <div>
              <h1 className="text-center text-secondary text-6xl my-24">
                Blog
              </h1>

              <div>
                {Posts.map((p) => (
                  <Link to={"/blog/" + p._id}>
                    <div className="grid grid-cols-5 gap-8 mb-16">
                      <div className="col-span-2">
                        <img
                          src={
                            "https://images.takeshape.io/" + p.featureImage.path
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-span-3 text-secondary">
                        <p className="text-4xl">{p.title}</p>
                        <p className="font-bold py-4">
                          {format(new Date(p._enabledAt), "LLL dd, yyyy")}
                        </p>
                        <p>{p.deck}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
