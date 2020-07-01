import React,{useState, useEffect} from "react";

function CloseButton({ setRenderElement, setProjectScroll, setCloseButtonSide, closeButtonSide }) {
  const [hide,setHide] = useState(true)

  const handleClick = () => {
    setProjectScroll(false);
    setCloseButtonSide("right")
    setTimeout(() => setRenderElement("slide-three"), 700);
  };

  useEffect(() => {
    (() => {
      setTimeout(() => setHide(false), 600)
    })()
  }, []);

  return (
    <div className="closeBtnWrap" id={closeButtonSide === "left" ? "left" : null} style={{display: hide ? 'none' : 'flex' }} onMouseUp={handleClick}>
      <svg className="closeButton" height="28" width="28">
        <path d="m2.047509,27.918034c-0.510094,0 -1.020187,-0.194372 -1.409566,-0.583098c-0.778777,-0.77745 -0.778777,-2.03695 0,-2.8144l23.923719,-23.883572c0.778757,-0.77747 2.040374,-0.77747 2.819131,0s0.778777,2.03695 0,2.8144l-23.923719,23.883572c-0.389378,0.388725 -0.899472,0.583098 -1.409566,0.583098z" />
        <path d="m25.927733,27.918033c-0.509238,0 -1.018475,-0.194699 -1.4072,-0.584078l-23.88357,-23.923722c-0.77747,-0.778757 -0.77747,-2.040375 0,-2.819132s2.03695,-0.778777 2.8144,0l23.88357,23.923722c0.77747,0.778757 0.77747,2.040375 0,2.819132c-0.388725,0.389379 -0.897963,0.584078 -1.4072,0.584078z" />
      </svg>
    </div>
  );
}

export default CloseButton;
