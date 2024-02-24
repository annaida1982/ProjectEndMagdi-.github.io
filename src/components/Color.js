import React from "react";

export default function Color({ colorData, setColor }) {
  return (
    <>
      <ul className="colors ps-0">
        {colorData &&
          colorData?.map((item, index) => (
            <li
              onClick={() => setColor(item?._id)}
              style={{ backgroundColor: item?.title, cursor: "pointer" }}
              key={index}
            ></li>
          ))}
      </ul>
    </>
  );
}
