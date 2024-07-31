import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Logout from "@/component/Logout";
export default async function HomePage() {
  const session = await getSession();
  return (
    <div className="home">
      <h2>Home Page</h2>
    </div>
  );
}
