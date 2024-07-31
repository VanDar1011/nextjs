import Link from "next/link";
export default function MenuHeader() {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href={"/"} className="text-white hover:text-gray-400">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link href={"/profile"} className="text-white hover:text-gray-400">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
