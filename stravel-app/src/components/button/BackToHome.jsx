"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function BackToHome() {
  const router = useRouter();
  const btn_back = useRef(null);
  const handleClick = () => {
    router.push("/");
  };
  useEffect(() => {
    if (btn_back) {
      btn_back.current.addEventListener("click", handleClick);
    }
  });
  return (
    <Link
      ref={btn_back}
      href="/"
      class="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
    >
      Back to Homepage
    </Link>
  );
}
