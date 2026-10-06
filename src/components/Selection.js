import React, { useState } from 'react';

const Selection = (props) => {
  const { applyColor } = props;

  const [style, setStyle] = useState({
    background: ""
  });

  applyColor(setStyle);

  return (
    <div
      className="fix-box"
      style={style}
    >
    </div>
  );
};

export default Selection;
