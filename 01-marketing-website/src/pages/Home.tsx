import React from "react";
import { Posts } from "../const";
import { format } from "date-fns";

function Home() {
  return (
    <main>
      <div>
        <div className="section-1 bg-primary border-t-4 border-secondary">
          <div className="w-full flex items-center justify-center py-6">
            <a href="#">
              <img className="block" src="/logo.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="section2 bg-main">
          <div className="bg-opacity-80 h-3/4vh bg-secondary flex items-center justify-start">
            <div className="px-80 text-white">
              <div className="max-w-2xl">
                <h1 className="text-6xl py-4">
                  Gatsby TakeShape Startup Starter
                </h1>
                <p className="py-4">
                  Integrate TakeShape CMS using a ready to go TakeShape starter
                  project!
                </p>
                <button className="my-4 px-8 py-4 bg-primary text-secondary uppercase font-bold">
                  View starter on github
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="px-80 py-16">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <div>
                  <p className="text-secondary text-5xl mb-8">
                    Our product makes your life easier.
                  </p>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-full"
                  src="https://images.takeshape.io/6f78e8ac-527a-4e09-9c5e-510876b096bf/dev/7dd7932f-0d30-4bb5-8647-8abf4a4f9eb7/7-pexel-261821.png"
                  alt="intro"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-4">
          <div className="bg-primary h-56 px-80 flex items-center">
            <div className="w-full grid grid-cols-3">
              <div className="text-secondary text-center">
                <p className="text-6xl mb-3">15</p>
                <p>Awards won</p>
              </div>
              <div className="text-center text-secondary">
                <p className="text-6xl mb-3">104</p>
                <p>Happy customers</p>
              </div>
              <div className="text-center text-secondary">
                <p className="text-6xl mb-3">0</p>
                <p>Hassle</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-5 bg-white px-80 py-24">
          <div>
            <div>
              <div>
                <h1 className="text-4xl text-secondary mb-8">Featured Posts</h1>

                <div className="grid grid-cols-2 gap-4">
                  {Posts.slice(0, 2).map((p) => (
                    <a href="#">
                      <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-2">
                          <img
                            src={
                              "https://images.takeshape.io/" +
                              p.featureImage.path
                            }
                            alt=""
                          />
                        </div>
                        <div className="col-span-3 text-secondary">
                          <p className="text-xl font-bold mb-2">{p.title}</p>
                          <p className="font-bold">
                            {format(new Date(p._enabledAt), "LLL dd, yyyy")}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-center mt-16">
                  <button className="my-4 px-8 py-4 bg-primary text-secondary uppercase font-bold">
                    View All Posts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-6 bg-secondary w-full h-96">
          <div className="px-80 h-full w-full flex justify-center items-center">
            <div>
              <div>
                <div className="text-center text-white">
                  <h1 className="text-6xl">Ready to take the next step?</h1>
                  <p className="py-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="my-4 px-8 py-4 bg-primary text-secondary uppercase font-bold">
                    Contact US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer bg-white w-full h-24">
          <div className="h-full flex items-center justify-center">
            <div>
              <div className="text-secondary text-sm">
                <p>© 2021 TakeShape, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
