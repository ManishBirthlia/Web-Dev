import React, { useState } from "react";

export default function (prop) {
  // const [check, setCheck] = useState(false);
  return (
    <div>
      <ul>
        {prop.list.map((element, index) => {
          return (
            <div key={index} style={{ textAlign: "left" }}>
              {/* <input type="checkbox" /> */}
              <li
                // onClick={() => {
                //   setCheck(!check);
                // }}
                // style={{ textDecoration: check ? "line-through" : null }}
                className="disp"
              >
                {element.text}
              </li>
              <button
                onClick={() => {
                  prop.handleDelete(index);
                }}
                className="disp deleteBtn"
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
