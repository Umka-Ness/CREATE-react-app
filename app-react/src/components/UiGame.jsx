import React, { useState } from "react";

export const UiGame = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  function reset() {
    setValue(value1);
    setValue1("");
  }
  return (
    <div style={{ display: "flex" }}>
      <input type="text" value={value} />
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <button onClick={reset}>Goo</button>
    </div>
  );
};
