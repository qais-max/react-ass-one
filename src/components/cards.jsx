import React from "react";

export default function Card({ bgColor }) {
  return (
    <div className="">
      <p className={`h-70 w-70 m-2 ${bgColor}`}></p>
    </div>
  );
}
