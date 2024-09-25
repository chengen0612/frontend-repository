"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as yup from "yup";

export default async function handler(formData) {
  const isValid = await schema.isValid({
    userId: +formData.get("userId"),
  });

  if (isValid) {
    cookies().set("userId", formData.get("userId"));
    redirect("/me");
  }
}

const schema = yup.object({
  userId: yup.number().min(1).max(10),
});
