import React from "react";

function Contact() {
  return (
    <div className="p-8 bg-base-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-center text-indigo-600">
        Contact Us
      </h1>
      <form className="space-y-4 p-6 bg-base rounded-lg">
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="message" className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea textarea-bordered"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
