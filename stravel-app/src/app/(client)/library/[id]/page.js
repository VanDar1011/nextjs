import React from "react";
import "./styleDetail.css";
export default async function DetailPage({ params }) {
  let detailData = {};
  try {
    const res = await fetch(process.env.SERVER_API + "/pages");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    detailData = data[0].galleryBox[params.id];
    console.log(detailData);
  } catch (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="detailItemLibrary col-8 d-flex justify-content-center mx-auto flex-column">
      <img
        src={"https://api-pages.vercel.app/" + detailData.src}
        className="img_library-detail"
      ></img>
      <p className="text-3xl py-1">Nơi đến : {detailData.h3}</p>
      <p className="text-2xl">Vị trí địa lí : {detailData.span}</p>
    </div>
  );
}
