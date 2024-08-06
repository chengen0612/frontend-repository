import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Navigation</h1>
      <nav className="mt-12 text-lg">
        <ul className="[&>*]:py-px">
          <li className="list-disc hover:text-cyan-500">
            <Link href="/login">Login</Link>
          </li>
          <li className="list-disc hover:text-cyan-500">
            <Link href="/post/1">View post</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
