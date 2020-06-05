import React from "react";

const Banner = ({setScrollToPage}) => {
  return (
    <div className="banner-gradient">
      <h1 className="hi">
        Hello.
        <br /> I am Richard
      </h1>
      <h3 className="sub">a Web Developer.</h3>
      <h3>Technologies I use</h3>
      <p className="technologies">
        Html5, Css3, Scss, JavaScript, ReactJS, NodeJS, GitHub, Adobe XD,
        Photoshop.
      </p>
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
        Contact me
      </p>
      <p
        id="btn"
        className="prjects"
        onClick={() => {
          setScrollToPage(1);
        }}
      >
        Projects
        <svg height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
      </p>
    </div>
  );
};

export default Banner;
