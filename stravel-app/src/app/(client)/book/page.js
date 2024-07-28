import TitleSection from "@/components/template/TitleSection";
import React from "react";
import "./styleBook.css";
import FormBook from "@/components/form/FormBook";
export default function BookPage() {
  return (
    <div className="book_section col-10 mx-auto">
      <TitleSection title="Tìm ưu đãi" />
      <div class="col-10 d-flex mx-auto align-items-center">
        <div class="col-6 d-flex align-items-center justify-content-center">
          <img src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"></img>
        </div>
        <div class="col-6">
          <FormBook />
        </div>
      </div>
    </div>
  );
}
