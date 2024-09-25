import { actions } from "@/app/actions";

export default async function Comment({ comment }) {
  const avatar = await actions.user.avatar.get(comment.username);

  return (
    <div className="flex items-center gap-x-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar.thumbnail}
        alt={comment.username}
        className="rounded-full"
      />

      <div className="text-sm">
        <div className="font-bold text-cyan-700">{comment.username}</div>
        <div>{comment.body}</div>
      </div>
    </div>
  );
}
