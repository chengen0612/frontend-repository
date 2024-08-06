import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LoginForm from "./components/login-form";

export default function Page() {
  const userId = cookies().get("userId")?.value;

  if (userId) {
    redirect("/me");
  }

  return (
    <div>
      <h1 className="mt-12 text-center text-4xl text-cyan-700 tracking-wide font-bold">
        Login
      </h1>

      <LoginForm />
    </div>
  );
}
