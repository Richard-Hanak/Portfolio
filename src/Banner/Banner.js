import React from "react";

const Banner = ({ setScrollToPage, setLanguage, language }) => {
  

  return (
    <div className="banner-gradient">
      <h1 className={language === "EN" ? "hi" : "ahoj"}>
        {language === "EN" ? "Hello." : "Ahoj."}
        <br /> {language === "EN" ? "I am Richard" : "Volám sa Richard"}
      </h1>
      <div className="language">
        <div id="EN" className={language === "EN" ? "language-toggled" : null} onClick={() => setLanguage("EN")}></div>
        <div id="SK" className={language === "SK" ? "language-toggled" : null} onClick={() => setLanguage("SK")}></div>
      </div>
      <h3 className={language === "EN" ? "sub" : "subSK"}>{language === "EN" ? "a Web Developer." : "Webový Developer."}</h3>
      <div className="technologies-wrap">
      <h3>{language === "EN" ? "Technologies that I use" : "Technológie, ktoré používam"}</h3>
      <p className="technologies">
        Html5, Scss, JavaScript, ReactJS, Material UI, NodeJS, Express, PostgreSQL, KnexJS, Mocha+Chai, GitHub, Adobe XD.
      </p></div>
      <p
        id="btn"
        className="contact"
        onClick={() => {
          setScrollToPage(2);
        }}
      >
        <svg className="doubleArrow-top" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        <svg className="doubleArrow-bot" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        {language === "EN" ? "Contact me" : "Kontakt"}
      </p>
      <p
        id="btn"
        className="prjects"
        onClick={() => {
          setScrollToPage(1);
        }}
      >
        {language === "EN" ? "Projects" : "Projekty" }
        <svg height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
      </p>
    </div>
  );
};

export default Banner;
