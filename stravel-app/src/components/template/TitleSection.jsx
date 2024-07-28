import React from "react";
import "./styleTitleSection.css";
export default function TitleSection({ title }) {
  const arrTitle = title.split("");
  console.log(arrTitle);
  return (
    <div
      className="title_section d-flex gap-2 lh-base d-flex justify-content-center"
      key={title}
    >
      {arrTitle.map((item, index) => {
        if (item == " ") return <span className="px-3 py-2" key={index}></span>;
        return (
          <span
            key={index}
            className="text-4xl font-bold px-3 py-2 d-flex justify-content-center align-items-center keyword"
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
