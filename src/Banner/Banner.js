import React from "react";

const Banner = () => {
  return (
    <div className="gradient">
      <h1 className="hi">
        Hello.
        <br /> I am Richard
      </h1>
      <h3 className="sub">a Web Developer.</h3>
      <h3>Technologies I use</h3>
      <p className="technologies">
        Html5, Css3, JavaScript, ReactJS, NodeJS, GitHub, Adobe XD, Photoshop.
      </p>
      <a id="btn" className="contact">
        <svg className="top" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        <svg className="bot" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        Contact me
      </a>
      <a id="btn" className="prjects">
        Projects
        <svg height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
      </a>
    </div>
  );
};

export default Banner;
