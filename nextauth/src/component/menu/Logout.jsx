"use client";
import { signOut } from "next-auth/react";
import React from "react";
export default function Logout() {
  const handeLogout = () => {
    signOut();
  };
  return (
    <div className="d-flex justify-content-center mt-4">
      <button onClick={handeLogout} className="btn btn-danger">
        Đăng xuất
      </button>
    </div>
  );
}
