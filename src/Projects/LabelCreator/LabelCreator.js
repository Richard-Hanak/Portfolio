import React from "react";

import CloseButton from "../CloseButton/CloseButton";

const LabelCreator = () => {
  return (
    <div className="BackgroundWrap">
      <CloseButton />
      <div className="IframeWrapper">
        <iframe
          width="1024"
          height="576"
          src="https://www.youtube.com/embed/x-4nYHFPaX8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LabelCreator