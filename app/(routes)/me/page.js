import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { client } from "@/app/client";
import Profile from "./components/profile";

export default async function Page() {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    redirect("/login");
  }

  const user = await client.user.retrieve(userId);

  return (
    <div className="text-center">
      <h1 className="mt-12 text-center text-4xl tracking-wide font-bold">
        Welcome back, <span className="text-cyan-500">{user.username}</span>
      </h1>

      <Profile userId={userId} />

      <form action={client.auth.logout}>
        <button className="mt-12 text-lg bg-red-500 rounded py-1 px-2 text-slate-50 hover:text-white hover:bg-red-400">
          Logout
        </button>
      </form>
    </div>
  );
}
