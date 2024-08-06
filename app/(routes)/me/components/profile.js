import { client } from "@/app/client";

export default async function Profile({ userId }) {
  const user = await client.user.retrieve(userId);
  const avatar = await client.user.avatar(user.username);

  return (
    <div className="mt-12 mx-auto w-1/2 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar.large}
        alt={user.username}
        className="rounded-full mx-auto"
      />
      <div className="mt-8 font-bold text-xl text-cyan-700">{user.name}</div>
      <div className="mt-3">{user.phone}</div>
      <a
        href={`mailto:${user.email}`}
        className="text-cyan-500 mt-2 inline-block"
      >
        {user.email}
      </a>
      <div className="mt-2">
        {[user.address.street, user.address.suite, user.address.city].join(
          ", "
        )}
      </div>
    </div>
  );
}
