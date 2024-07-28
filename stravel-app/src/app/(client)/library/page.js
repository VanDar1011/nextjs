import React from "react";
import ButtonDetail from "@/components/button/ButtonDetail";
import TitleSection from "@/components/template/TitleSection";
import "./styleLibrary.css";

export default async function LibraryPage() {
  let libraryData = [];
  try {
    const res = await fetch(process.env.SERVER_API + "/pages");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    libraryData = data[0].galleryBox;
  } catch (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <TitleSection title="Thư viện" />
      <div className="list_library col-10 mx-auto justify-content-center">
        {libraryData.map((item, index) => {
          return (
            <div className="item_library">
              <img
                src={"https://api-pages.vercel.app/" + item.src}
                className="img_library"
              ></img>
              <div className="content-item d-flex justify-content-between mt-3 align-items-center">
                <span className="fw-bold">{item.h3}</span>
                <ButtonDetail index={index} key={index} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
