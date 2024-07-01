import About from "@/components/About";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="flex bg-gray-900">
      <div>
        <Nav />
      </div>
      <main className="flex justify-center w-dvw">
          <About />
      </main>
    </div>
  );
}
