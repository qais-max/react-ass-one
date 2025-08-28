import React from "react";

export default function Card({ bgColor, head, title }) {
  return (
    <div className="">
      <div className={`h-70  m-2 ${bgColor}`}></div>
      <h1 className="text-red-600 p-1">{head}</h1>
      <p className="text-blue-700 p-1">{title}</p>
    </div>
  );
}
