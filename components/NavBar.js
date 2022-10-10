import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between p-10 font-bold uppercase">
      <div
        className="cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-violet-600"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div
        className="cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-violet-600"
        onClick={() => router.push("/feed/1")}
      >
        Feed
      </div>
      <div
        className="cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-violet-600"
        onClick={() => router.push("/about")}
      >
        About
      </div>
      <div
        className="cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-violet-600"
        onClick={() => router.push("/contact")}
      >
        Contact
      </div>
    </nav>
  );
};

export default NavBar;
