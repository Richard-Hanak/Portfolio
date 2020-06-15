import React from "react";

import pdf from "./CV-RichardHanak.pdf";
import useFormValidation from "./useFormValidation";
import validateFormWarning from "./validateFormWarning";

const INITIAL_STATE = {
  email: "",
  message: "",
};

const Contact = ({ setScrollToPage, language }) => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateFormWarning);

  return (
    <div className="contact-gradient">
      <h1 className="headline">{language === "EN" ? "Contact" : "Kontakt"}</h1>
      <div className="contact-content">
      <p className="text-contact">
        {language === "EN"
          ? "If you have any questions feel free to contact me. I usually respond within 24 hours."
          : "Na všetky otázky Vám rád odpoviem. Zvyčajne do 24 hodín."}
      </p>
      <div className="socials">

          <a
            href="https://github.com/Richard-Hanak"
            className="link-socials"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={pdf}
            className="link-socials"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "EN" ? "Resume" : "Životopis" }
          </a>
          <a
            href="https://www.linkedin.com/in/richard-hanak-212a491ab/"
            className="link-socials"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      <div className="form-wrap">
        <form className=".contact" onSubmit={handleSubmit}>
          <div className="mail-wrap">
            <input
              id="mail"
              type="text"
              placeholder={language === "EN" ? "Your e-mail" : "Váš e-mail"}
              onChange={handleChange}
              value={values.email}
              name="email"
              className={errors.email && "error-input"}
              autoComplete="off"
            />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}
          <textarea
            id="message"
            placeholder={language === "EN" ? "message" : "správa"}
            rows="4"
            cols="50"
            onChange={handleChange}
            value={values.message}
            name="message"
            className={errors.message && "error-input"}
            autoComplete="off"
          ></textarea>
          <div id="thx">
            {language === "EN"
              ? "Thank you for getting in touch."
              : "Ďakujem že ste ma kontaktovali."}
          </div>
          {errors.message && <p className="error-text">{errors.message}</p>}

          <input
            id="submit"
            disabled={isSubmitting}
            type="submit"
            value={language === "EN" ? "SEND" : "POSLAŤ"}
          />
        </form>
        </div>
        </div>
  
      <p
        id="btn"
        className="prjects"
        onClick={() => {
          setScrollToPage(1);
        }}
      >
        <svg height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        {language === "EN" ? "Projects" : "Projekty"}
      </p>
      <p
        id="btn"
        className="home"
        onClick={() => {
          setScrollToPage(0);
        }}
      >
        {language === "EN" ? "Home" : "Domov"}
        <svg className="doubleArrowUp-top" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        <svg className="doubleArrowUp-bot" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
      </p>
    </div>
  );
};

export default Contact;
