"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function ButtonDetail({ index }) {
  const router = useRouter();
  const handleClick = () => {
    console.log(index);
    router.push("/library/" + index);
  };
  return (
    <button className="btn btn-success" onClick={handleClick}>
      Chi tiết
    </button>
  );
}
