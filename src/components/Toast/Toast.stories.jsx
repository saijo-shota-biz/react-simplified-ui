import React from "react";
import ToastContainer from "./Toast";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useRef, useState } from "@storybook/addons";
import { ToastPosition } from "../../enum/ToastPosition";
import { Color } from "../../enum/Color";

export default {
  title: "Toast",
  component: ToastContainer,
  decorators: [withKnobs, withInfo],
};

export const toast = () => {
  const toastRef = useRef(null);

  const [count, setCount] = useState(0);

  const onClick = (color) => {
    toastRef.current.add({
      color: color,
      message: `${count} - これはテストメッセージです。`,
      time: 5000,
    });
    setCount(count + 1);
  };

  const position = select(
    "Position",
    { TOP: ToastPosition.TOP, BOTTOM: ToastPosition.BOTTOM },
    ToastPosition.BOTTOM
  );

  const onClose = () => {
    console.log("close");
  };

  return (
    <>
      <div style={{ "margin-top": "200px" }}>
        <button onClick={() => onClick(Color.DEFAULT)}>Default</button>
        <button onClick={() => onClick(Color.MAIN)}>Main</button>
        <button onClick={() => onClick(Color.DARK)}>Dark</button>
        <button onClick={() => onClick(Color.LIGHT)}>Light</button>
        <button onClick={() => onClick(Color.ACCENT)}>Accent</button>
      </div>

      <ToastContainer ref={toastRef} position={position} onClose={onClose} />
    </>
  );
};
