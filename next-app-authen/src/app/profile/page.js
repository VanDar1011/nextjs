import React from "react";
import { getSession } from "@/lib/session";
import Sign from "@/component/Sign";

export default async function ProfilePage() {
  const session = await getSession();
  return (
    <div className="profile">
      <h2>Profile Page</h2>
      {session ? (
        <div className="">
          <h2>Xin chèo {session.name}</h2>
          <h2>Email : {session.email}</h2>
        </div>
      ) : (
        <div className="navigate-login">
          <p>Vui long đăng nhập để xem profile</p>
          <Sign />
        </div>
      )}
    </div>
  );
}
