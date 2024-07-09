import About from "@/components/About";
import Experience from "@/components/Experience";
import HomeIntro from "@/components/HomeIntro";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="flex bg-gray-900">
      <div>
        <Nav />
      </div>
      <main className="flex flex-col align-center w-dvw md:ml-[16rem]">
          <HomeIntro />
          <About />
          <Experience />
      </main>
    </div>
  );
}
