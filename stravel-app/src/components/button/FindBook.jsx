"use client";
import React from "react";
export default function FindBook({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-secondary my-3">
      Tìm ngay
    </button>
  );
}
