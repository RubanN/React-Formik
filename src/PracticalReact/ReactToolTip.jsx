import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ReactToolTip = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "red" }}></span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
    </div>
  );
};

export default ReactToolTip;
