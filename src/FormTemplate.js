import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j9umz89",
        "template_lzyi0wb",
        form.current,
        "6rb479gU5sDEGfzsi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required autoComplete="off" />
      <label>Email</label>
      <input type="email" name="email" required autoComplete="off" />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  );
};

export default FormTemplate;
