import Login from "./login";

export default function LoginPage() {
  return (
    <div className="flex h-full w-full">
      <div className="mt-32 flex w-full flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-bold">
          Sign into your account
        </h1>
        <Login />
      </div>
    </div>
  );
}
