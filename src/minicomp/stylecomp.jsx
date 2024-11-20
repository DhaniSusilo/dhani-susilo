/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";

export const B = ({ children }) => {
  return <span className="font-bold opacity-100">{children}</span>;
};

export const TextShadow = ({ children }) => {
  return (
    <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
      {children}
    </span>
  );
};

export const LogoBg = ({ color, width, height }) => {
  return (
    <div
      style={{
        maskImage: `url(${logo})`,
        WebkitMaskImage: `url(${logo})`,
        backgroundColor: color,
        width: width,
        height: height,
        position: "absolute",
      }}
    />
  );
};
