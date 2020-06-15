import React from "react";

const LabelCreator = () => {

  return (
    <div id="labelCreatorWrap">
      <div className="IframeWrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/x-4nYHFPaX8"
          frameborder="0"
          title="Label Creator"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LabelCreator;
