import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Appremix" },
    { name: "description", content: "Welcome to Appremix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="font-bold text-white text-5xl">✨APPREMIX</h1>
    </div>
  );
}
