"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function handler() {
  cookies().delete("userId");
  redirect("/login");
}
