"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleEmailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3kyo39g", // e.g., service_xxx
        "template_ux6a21g", // e.g., template_xxx
        formRef.current,
        "TSQf3UbOw00KNsyar" // e.g., jsh2JHds-sampleKey
      )
      .then(
        () => {
          setEmailSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          We are currently looking for new opportunities to build relations with more and more clients. Whether you have a
          question or just want to say hi, We'll try my best to get back to you!
        </p>
        {/* <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Abhinavkrishna1223?tab=repositories">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/abhinav-krishna-8b14a7238">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div> */}
        <h1 className=" text-white mt-12">Contact No. - (+91) 9485789907</h1>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form
            ref={formRef}
            className="flex flex-col"
            onSubmit={handleEmailSend}
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="username@gmail.com"
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Purpose of Contacting"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
