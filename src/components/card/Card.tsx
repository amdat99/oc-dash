"use client";
import React from "react";

type CardProps = {
  height?: number;
  background?: string;
  backgroundImg?: string;
  children: React.ReactNode;
  className?: string;
};

function Card({ height, background, backgroundImg, children, className }: CardProps) {
  return (
    <div
      style={{
        height: height ? height : "fit-content",
        background: background ? background : "var(--primary-offset-color)",
        backgroundImage: backgroundImg ? `url(${backgroundImg})` : "",
      }}
      className={`card ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
