import Link from "next/link";
export default function MenuHeader() {
  return (
    <div className="bg-success py-4">
      <ul className="d-flex justify-content-center gap-3 ">
        <li>
          <Link href={"/"} className="text-decoration-none text-white fw-bold">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            href={"/profile"}
            className="text-decoration-none text-white fw-bold"
          >
            Trang cá nhân
          </Link>
        </li>
      </ul>
    </div>
  );
}
