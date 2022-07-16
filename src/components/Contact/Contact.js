import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp, BsCheck2All } from "react-icons/bs";

import { BiErrorCircle } from "react-icons/bi";

import emailjs from "emailjs-com";
import { useRef } from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  const form = useRef();
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };
  const [FormValues, setFormValues] = useState(initialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     "service_qppw3rh",
  //     "template_07rgo9r",
  //     form.current,
  //     "weLpCrsX9BpQ1ZQr9"
  //   );
  //   e.target.reset();
  // };

  // #############################################################
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...FormValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(FormValues));
    setIsSubmit(true);
    emailjs.sendForm(
      "service_qppw3rh",
      "template_07rgo9r",
      form.current,
      "weLpCrsX9BpQ1ZQr9"
    );
    e.target.reset();
  };
  useEffect(() => {
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
    }
  }, [FormErrors]);
  const validate = (values) => {
    const errors = {};
    const validname = /[A-Za-z]$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
    } else if (!validname.test(values.fullname)) {
      errors.fullname =
        "This is not a valid name!, Name should be charachters only";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Please Enter Your Message!";
    }
    return errors;
  };
  // #############################################################

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>

            <a href="mailto:mariamadelmuhammad@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://www.facebook.com/mariam.adel.92/" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=01143934345"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            name="fullname"
            value={FormValues.fullname}
            onChange={handleChange}
          />

          <p id="msg">{FormErrors.fullname}</p>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={FormValues.email}
            onChange={handleChange}
          />

          <p id="msg">{FormErrors.email}</p>

          <textarea
            name="message"
            placeholder="Your Message..."
            cols="30"
            rows="7"
            required
            value={FormValues.message}
            onChange={handleChange}
          />

          <p id="msg">{FormErrors.textarea}</p>

          <button
            id="btn"
            type="submit"
            className="btn btn-outline-primary  "
            onSubmit={handleSubmit}
          >
            Send Message
          </button>

          {Object.keys(FormErrors).length === 0 && isSubmit ? (
            <div classNameName="ui message success">
              <div className="alert alert-primary" role="alert">
                Message Sent Successfully
                <BsCheck2All />
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
