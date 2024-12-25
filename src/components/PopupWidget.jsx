import { useEffect, useRef } from "react";
import { renderWidget } from "ik-pruthvi-usersnap1";

const PopupWidget = ({ buttonText = "Get Support", annotation = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      renderWidget({
        target: containerRef.current,
        options: { buttonText, annotation },
      });
    }
  }, [buttonText, annotation]);

  return <div ref={containerRef} />;
};

export default PopupWidget;
