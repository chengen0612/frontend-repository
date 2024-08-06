import { client } from "@/app/client";

export default function LoginForm() {
  return (
    <form className="mt-12 mx-auto grid w-[400px]" action={client.auth.login}>
      <div className="grid">
        <label htmlFor="userId" className="text-lg font-medium">
          User Id
        </label>
        <input
          id="userId"
          type="text"
          name="userId"
          placeholder="Enter a number from 1 to 10"
          className="bg-slate-100 p-1 rounded"
        />
      </div>

      <button className="mt-9 text-lg bg-cyan-500 rounded p-1 text-slate-800 hover:text-slate-700 hover:bg-cyan-400">
        Submit
      </button>
    </form>
  );
}
