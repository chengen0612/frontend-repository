import { client } from "@/app/client";
import Comment from "./components/comment";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { id } = params;
  const post = await client.post.retrieve(id);
  const comments = await client.post.comments(id);
  const user = await client.user.retrieve(post.userId);
  const avatar = await client.user.avatar(user.username);

  return (
    <div className="mt-9 mx-auto w-1/2">
      <h2 className="text-4xl font-semibold">{post.title}</h2>

      <div className="flex items-center gap-x-6 mt-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar.medium} alt={user.username} className="rounded-full" />

        <div>
          <div className="font-bold text-cyan-700">
            {user.email.split("@")[0]}
          </div>
          <div>{post.body}</div>
        </div>
      </div>

      <ul className="mt-12">
        {comments.map((c) => (
          <li key={c.id} className="[&:not(:first-child)]:mt-6">
            <Suspense fallback="Loading...">
              <Comment comment={c} />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  );
}