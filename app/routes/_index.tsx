import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Appremix" },
    { name: "description", content: "Welcome to Appremix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button variant="ghost" className="font-bold text-5xl">
        ✨APPREMIX
      </Button>
    </div>
  );
}
