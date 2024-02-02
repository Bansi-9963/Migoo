import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Testing = () => {
  const [emailId, setEmailId] = useState("");

  const handleChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email.js Credentials
    const serviceId = "service_edbcj6q";
    const templateId = "template_cmhx0c9";
    const publicKey = "rYTHADbGI-2m5GuZ5";

    // if (emailId === localStorage.emailId) {
    //   console.log(localStorage.password);
    // }
    // Dynamic Template Details
    const templateparams = {
      to_email: emailId,
      message: localStorage.password,
    };
    // Sending Email With Password
    // emailjs
    //   .send(serviceId, templateId, templateparams, publicKey)
    //   .then((response) => {
    //     console.log("email sent successfully", response);
    //     setEmailId("");
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //   });
  };

  return (
    <section className="mt-40 mb-40">
      <form
        className="2xl:w-[520px] mt-10 mb-10 mx-auto"
        style={{ boxShadow: "0 0 10px -4px #002603" }}
        onSubmit={handleSubmit}
      >
        <center className="pt-5">
          <h1 className="font-semibold text-[32px] leading-[38.4px]">
            Forgot Password
          </h1>
        </center>
        <center>
          <input
            id="email_address"
            type="email"
            className="rounded-md border-[1px] border-[#E6E6E6] 2xl:h-[54px] 2xl:w-[472px] mt-[20px] pl-5 focus:outline-none"
            value={emailId}
            onChange={handleChange}
          />
        </center>
        <div className="w-auto pb-5">
          <center>
            <button
              type="submit"
              className="w-auto mt-5 bg-[#E6992A] text-white font-medium p-3 rounded-md"
              id="btn1"
            >
              Send Password
            </button>
          </center>
        </div>
      </form>
    </section>
  );
};

export default Testing;
