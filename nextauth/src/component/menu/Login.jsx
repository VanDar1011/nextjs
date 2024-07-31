"use client";
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <div className="d-flex justify-content-center">
      <button onClick={() => signIn()} className="btn btn-info">
        Đăng nhập
      </button>
    </div>
  );
}
