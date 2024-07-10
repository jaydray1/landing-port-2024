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
      <main className="flex flex-col align-center w-dvw lg:ml-[16rem] p-3 md:p-10">
          <HomeIntro />
          <About />
          <Experience />
      </main>
    </div>
  );
}
