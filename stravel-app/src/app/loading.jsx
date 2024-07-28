import React from "react";

export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center gap-4"
      style={{ height: "100vh" }}
    >
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
