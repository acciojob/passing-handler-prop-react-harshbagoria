import React, { useState } from 'react';

const Selection = (props) => {
  const { applyColor } = props;

  const [style, setStyle] = useState({
    background: ""
  });

    const updateSelectionStyle = (nextBackground) =>{
        setStyle(nextBackground);
    }

  return (
    <div
      className="fix-box"
      style={style}
    >
    </div>
  );
};

export default Selection;
