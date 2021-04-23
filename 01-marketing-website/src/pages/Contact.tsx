import React from "react";

function Contact() {
  return (
    <div className="w-2/5 text-center m-auto mb-12">
      <div>
        <div>
          <div>
            <h1 className="text-secondary text-6xl my-24">Contact Us</h1>

            <div>
              <div className="my-6">
                <input
                  type="text"
                  id="cc"
                  name="cc"
                  autoComplete="off"
                  className="w-full bg-gray-100 px-8 py-4"
                  placeholder="First Name"
                />
              </div>
              <div className="my-6">
                <input
                  name="name2"
                  className="w-full bg-gray-100 px-8 py-4"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="my-6">
                <input
                  name="name3"
                  className="w-full bg-gray-100 px-8 py-4"
                  type="text"
                  placeholder="Email Name"
                />
              </div>
              <div className="my-6">
                <textarea
                  className="w-full h-48 bg-gray-100 px-8 py-4"
                  name="name4"
                  id=""
                  placeholder="Message ..."
                ></textarea>
              </div>
              <button className="my-6 px-8 py-4 bg-primary text-secondary uppercase font-bold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
