import React, { useState } from "react";

const InnerLayout = (props) => {
  const { children } = props;

  return (
    <div className="inner-layout-container">
      <div className="inner-layout-right-container"></div>
      {children}
      <style jsx>
        {`
          .inner-layout-container {
            width: 100vw;
            height: inherit;
            background: #000;
          }
          .inner-layout-right-container {
            width: 80px;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            position: fixed;
            right: 0px;
            z-index: 1;
          }
          .mode-button {
            width: 40px;
            height: 20px;
            border: 1px solid #fff;
            border-radius: 10px;
            background: transparent;
            margin: auto;
            margin-top: 20px;
            position: relative;
            z-index: 1;
            cursor: pointer;
          }
          .mode-button:before {
            content: "";
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #fff;
            transition: all 500ms;
            top: 2px;
            position: absolute;
          }
        `}
      </style>
    </div>
  );
};

export default InnerLayout;
