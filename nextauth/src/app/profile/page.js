import React from "react";
import { getSession } from "@/lib/session";
import Logout from "@/component/menu/Logout";
import Login from "@/component/menu/Login";
export default async function ProfilePage() {
  const session = await getSession();
  console.log(session);
  return (
    <div className="profile">
      <h2 className="text-3xl text-center mt-4">Trang thông tin cá nhân</h2>
      {session ? (
        <div className="mx-auto col-3">
          <div class="infor my-4">
            <div className="d-flex justify-content-center">
              <img
                src={session.image}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <span className="d-block">
              Xin Chào :<span className="fw-bold">{session.name}</span>
            </span>
            <span className="d-block">
              Email : <span className="fw-bold">{session.email}</span>
            </span>
          </div>
          <Logout />
        </div>
      ) : (
        <div className="navigation_login">
          <p className="text-center text-danger">
            Vui lòng đăng nhập để xem Profile
          </p>
          <Login />
        </div>
      )}
    </div>
  );
}
