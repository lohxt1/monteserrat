import { useEffect, useMemo, useState } from "react";
import InnerLayout from "../components/innerLayout";
import VirtualScroll from "../components/virtualScroll";
import useVirtualScrollStore from "../stores/useVirtualScrollStore";

const FontShow = (props) => {
  const {} = props;

  const { scrollAmount } = useVirtualScrollStore((state) => state);

  const _idx = useMemo(
    () => parseInt((scrollAmount * 23) / 200),
    [scrollAmount]
  );

  const determineClass = (idx) => {
    if (idx - _idx < -1) {
      return "font-space-5";
    } else if (idx - _idx == -1) {
      return "font-space-4";
    } else if (idx - _idx == 0) {
      return "font-space-3";
    } else if (idx - _idx == 1) {
      return "font-space-2";
    }
  };

  const alphabets = `abcdefghijklmnopqrstuvwxyz`.toUpperCase().split("");

  return (
    <>
      <div className="font-show">
        <div className="header">
          <div className="left">↓FONT SHOWCASE↓</div>
          <div className="center">MONTESERRAT</div>
          <div className="right">↓EXPERIMENTAL SCROLL↓</div>
        </div>
        <div className="body">
          {alphabets.map((_, idx) => {
            return (
              <div className="font-space-wrapper">
                <div
                  className={`font-space ${determineClass(idx)}`}
                  style={{
                    zIndex: alphabets.length - idx,
                    background: idx % 2 == 0 ? "#fff" : "#030202",
                    color: idx % 2 == 0 ? "#030202" : "#fff",
                  }}
                >
                  <div
                    className="block"
                    // style={{ border: idx % 2 == 0 ? '1px solid #030202' : '1px solid #fff' }}
                  >
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                  </div>
                  <div
                    className="block"
                    // style={{ border: idx % 2 == 0 ? '1px solid #030202' : '1px solid #fff' }}
                  >
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                  </div>
                  <div
                    className="block"
                    style={{
                      borderLeft:
                        idx % 2 == 0 ? "2px solid #030202" : "2px solid #fff",
                      borderTop:
                        idx % 2 == 0 ? "2px solid #030202" : "2px solid #fff",
                    }}
                  >
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                    <div className="block-grid">
                      <div className="left">{_}</div>
                      <div className="center">{_}</div>
                      <div className="right">{_}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="next-button" onClick={handleNext}>
					Next
				</div> */}
      </div>
      <style jsx>
        {`
          .font-show {
            width: 100vw;
            height: 100%;
            overflow-x: hidden;
            overflow-y: hidden;
            position: fixed;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            font-family: "Montserrat", sans-serif;
          }
          .font-show .header {
            width: 100vw;
            height: 49px;
            position: relative;
            padding: 10px;
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            border-bottom: 1px solid #fff;
            align-items: center;
          }
          .font-show .header .left {
            width: fit-content;
          }
          .font-show .header .center {
            font-weight: 900;
            font-size: 30px;
            width: fit-content;
          }
          .font-show .header .right {
            width: fit-content;
          }
          .font-show .body {
            width: 100vw;
            height: calc(100% - 50px);
            position: relative;
          }
          .font-show .font-space-wrapper {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #030202;
            font-size: 100px;
          }
          .font-show .font-space-wrapper .font-space {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            position: relative;
          }
          .font-show .font-space-wrapper .font-space-2 {
            width: 50%;
            height: 50%;
            font-size: 50px;
            transition-property: width, height;
            transition-duration: 250ms;
          }
          .font-show .font-space-wrapper .font-space-3 {
            width: 25%;
            height: 25%;
            font-size: 25px;
            transition-property: width, height;
            transition-duration: 250ms;
          }
          .font-show .font-space-wrapper .font-space-4 {
            width: 12.5%;
            height: 12.5%;
            font-size: 12.5px;
            transition-property: width, height;
            transition-duration: 250ms;
          }
          .font-show .font-space-wrapper .font-space-4 .block:nth-child(1) {
            width: 0%;
            height: 0%;
            font-size: 0px;
          }
          .font-show .font-space-wrapper .font-space-4 .block:nth-child(2) {
            width: 100%;
            height: 100%;
          }
          .font-show .font-space-wrapper .font-space-4 .block:nth-child(3) {
            width: 0%;
            height: 0%;
            font-size: 0px;
          }
          .font-show .font-space-wrapper .font-space-4 .block:nth-child(4) {
            width: 0%;
            height: 0%;
            font-size: 0px;
          }
          .font-show .font-space-wrapper .font-space-5 {
            width: 0%;
            height: 0%;
            transition-property: width, height;
            transition-duration: 250ms;
          }
          .font-show .font-space-wrapper .font-space-5 .block {
            width: 0%;
            height: 0%;
            font-size: 0px;
          }
          .font-show .font-space-wrapper .block {
            position: absolute;
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            transition-property: width, height;
            transition-duration: 250ms;
          }
          .font-show .font-space-wrapper .block .block-grid {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .font-show .font-space-wrapper .block .block-grid .left {
            margin: 3%;
          }
          .font-show .font-space-wrapper .block .block-grid .center {
            margin: 3%;
          }
          .font-show .font-space-wrapper .block .block-grid .right {
            margin: 3%;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(2)
            .block-grid:nth-child(1)
            .left {
            font-weight: 700;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(2)
            .block-grid:nth-child(1)
            .center {
            font-weight: 800;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(2)
            .block-grid:nth-child(1)
            .right {
            font-weight: 900;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(2)
            .block-grid:nth-child(2)
            .left {
            font-weight: 700;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(2)
            .block-grid:nth-child(2)
            .center {
            font-weight: 800;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(2)
            .block-grid:nth-child(2)
            .right {
            font-weight: 900;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(3)
            .block-grid:nth-child(1)
            .left {
            font-weight: 400;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(3)
            .block-grid:nth-child(1)
            .center {
            font-weight: 500;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(3)
            .block-grid:nth-child(1)
            .right {
            font-weight: 600;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(3)
            .block-grid:nth-child(2)
            .left {
            font-weight: 400;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(3)
            .block-grid:nth-child(2)
            .center {
            font-weight: 500;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(3)
            .block-grid:nth-child(2)
            .right {
            font-weight: 600;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(4)
            .block-grid:nth-child(1)
            .left {
            font-weight: 100;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(4)
            .block-grid:nth-child(1)
            .center {
            font-weight: 200;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(4)
            .block-grid:nth-child(1)
            .right {
            font-weight: 300;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(4)
            .block-grid:nth-child(2)
            .left {
            font-weight: 100;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(4)
            .block-grid:nth-child(2)
            .center {
            font-weight: 200;
            font-style: italic;
          }
          .font-show
            .font-space-wrapper
            .block:nth-child(4)
            .block-grid:nth-child(2)
            .right {
            font-weight: 300;
            font-style: italic;
          }
          .font-show .font-space-wrapper .block:nth-child(1) {
            top: 0px;
            left: 0px;
          }
          .font-show .font-space-wrapper .block:nth-child(2) {
            top: 0px;
            right: 0px;
            width: calc(50% - 2px);
            height: calc(50% - 2px);
          }
          .font-show .font-space-wrapper .block:nth-child(3) {
            bottom: 0px;
            left: 0px;
          }
          .font-show .font-space-wrapper .block:nth-child(4) {
            bottom: 0px;
            right: 0px;
          }
          .font-show .next-button {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            border: 1px solid #fff;
            color: #030202;
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 30;
          }
          @keyframes spaceMove {
            0% {
              width: 100%;
              height: 100%;
            }
            50% {
              width: 50%;
              height: 50%;
            }
            100% {
              width: 25%;
              height: 25%;
            }
          }
        `}
      </style>
    </>
  );
};

const FontShowWrapper = (props) => {
  const {} = props;

  return (
    <InnerLayout>
      <FontShow />
      <VirtualScroll />
    </InnerLayout>
  );
};

export default FontShowWrapper;
