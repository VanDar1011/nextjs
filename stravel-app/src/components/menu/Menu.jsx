import React from "react";
import Link from "next/link";
import "./styleMenu.css";
export default function Menu() {
  return (
    <ul className="flex gap-3 text-xl">
      <li>
        <Link href={"/"}>Trang chủ</Link>
      </li>
      <li>
        <Link href={"/book"}>Đặt lịch</Link>
      </li>
      <li>
        <Link href={"/voucher"}>Ưu đãi</Link>
      </li>
      <li>
        <Link href={"/service"}>Dich vụ</Link>
      </li>
      <li>
        <Link href={"/library"}>Thư viện</Link>
      </li>
      <li>
        <Link href={"/evaluate"}>Đánh giá</Link>
      </li>
    </ul>
  );
}
