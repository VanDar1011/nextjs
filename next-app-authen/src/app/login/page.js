import Sign from "@/component/Sign";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <Sign />
    </div>
  );
}
