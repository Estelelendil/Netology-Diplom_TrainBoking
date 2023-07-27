import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* <div className="bg-[url('img/animation.gif')] w-full h-[100px]"></div> */}
      {/* <figure>
        <img src="file:///home/estelelendil/LEXSA/Netology/Diplom/src/img/animation.gif" alt="ЧУЧУУУУХ" />
      </figure>
      <video preload="auto" loop autoplay src="img/animation.gif" alt="ЧУЧУУУУХ"></video> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        //   xmlns:xlink="http://www.w3.org/1999/xlink"
        className="margin: auto; background: rgb(241, 242, 243) none repeat scroll 0% 0%; display: block; shape-rendering: auto;"
        width="200"
        height="200"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" r="0" fill="none" stroke="#FFA800" strokeWidth="2">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#274568" strokeWidth="2">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
