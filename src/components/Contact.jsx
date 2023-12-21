import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Cv from '../assets/docs/cv.pdf';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full md:pl-40 m-auto mt-20 p-4 pt-10 pb-10 pr-4 md:pr-12 flex flex-col md:flex-row items-center"
    >
      {/* Contact Form */}
      <form
        action="https://getform.io/f/9d5e61f9-65d8-4172-8eb1-1fda3f0a2b64"
        method="POST"
        encType="multipart/form-data"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-800 text-stone-600">
            CONTACT
          </p>
          <p className="text-stone-600 pt-6">
            Submit the form below and I will be in touch very soon.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 border-2 rounded-lg border-green-700 text-stone-600"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2 rounded-lg border-2 border-green-700 text-stone-600"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2 rounded-lg border-2 border-green-700 text-stone-600"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-lg border-2 border-green-700 text-stone-600"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="bg-gray-100 text-green-700 mt-4 w-auto p-4 rounded-lg border-2 border-green-700 hover:bg-green-700 hover:border-gray-700 hover:text-white">
          Send Message
        </button>
      </form>

      {/* Contact Card (Shifts below Contact Form on screens below md: breakpoint) */}
      <div className="w-full mt-10 md:w-[600px] mt-4 md:mt-0 md:ml-4 lg:pl-60">
  <div className="bg-green-50 p-6 rounded-lg shadow-lg shadow-green-800 text-stone-600">
    <p className="text-2xl lg:text-3xl text-center font-bold mb-4 md:mb-6">
      Let's Connect and create something awesome together!
    </p>
    <p className="mb-2 text-base lg:text-lg">
      {" "}
      <a
        href="mailto:omar.aziz93@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:scale-110 ease-in duration-200 p-2 flex items-center"
      >
        <FaEnvelope size={30} className="mr-2 text-green-800" />
        - omar.aziz93@outlook.com
      </a>
    </p>
    <p className="mb-2 text-base lg:text-lg">
      {" "}
      <a
        href="https://www.linkedin.com/in/omaraziz2503"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:scale-110 ease-in duration-200 p-2 flex items-center"
      >
        <FaLinkedinIn size={30} className="mr-2 text-green-800" />
        - linkedin.com/in/omaraziz2503
      </a>
    </p>
    <p className="mb-2 text-base lg:text-lg">
      {" "}
      <a
        href="https://github.com/Azizo93"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:scale-110 ease-in duration-200 p-2 flex items-center"
      >
        <FaGithub size={30} className="mr-2 text-green-800" />
        - github.com/Azizo93
      </a>
    </p>
    <p className="text-base lg:text-lg">
      {" "}
      <a
        href={Cv}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:scale-110 ease-in duration-200 p-2 flex items-center"
      >
        <BsFillPersonLinesFill size={30} className="mr-2 text-green-800" />
        - Download my CV
      </a>
    </p>
  </div>
</div>

    </div>
  );
};

export default Contact;
