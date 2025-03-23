import React from "react";

const Circle = ({
  top,
  left,
  right,
  bottom,
  startColor,
  stopColor,
  gradientName,
  size
}) => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <ellipse
        cx="23.1071"
        cy="23.1063"
        rx="23.1071"
        ry="23.1063"
        transform="matrix(-0.998595 0.0529929 -0.0529969 -0.998595 47.5984 45.624)"
        fill={`url(#${gradientName})`}
      />
      <defs>
        <linearGradient
          id={`${gradientName}`}
          x1="23.3855"
          y1="12.5275"
          x2="51.0011"
          y2="56.8945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={startColor} />
          <stop offset="0.76832" stop-color={stopColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;
