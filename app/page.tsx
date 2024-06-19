import About from "@/components/About";
import Nav from "@/components/Nav";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Nav />
      </div>
      <main className="flex justify-center w-dvw">
          <About />
      </main>
    </div>
  );
}
