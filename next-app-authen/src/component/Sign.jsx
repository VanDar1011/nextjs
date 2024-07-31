"use client";
import { signIn } from "next-auth/react";
export default function Sign() {
  return <button onClick={() => signIn()}>Login</button>;
}
