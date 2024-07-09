'use client'

import TypingAnimation from "@/utillities/Typer"
import Image from 'next/image'

const HomeIntro = () => (
    <section id="home" className="grid md:grid-cols-2 md:gap-20 md:w-[64rem] self-center items-center h-screen">
        <div>
            <h6 className="pb-6 text-2xl font-medium">Hello, I am</h6>
            <h1 className="pb-6 text-6xl font-bold">Jon-Michael</h1>
            <TypingAnimation />
            <p className="py-6 text-lg">{`As a frontend software engineer with a passion for writing simple code and eliminating unnecessary complexity, 
            I thrive on architecting and building innovative new features while leading, mentoring, and encouraging.`}</p>
        <a className="cursor-pinter underline hover:decoration-2 underline-offset-8 decoration-amber-400" href="https://azure-donny-32.tiiny.site" rel="noopener noreferrer" target="_blank">View Resume</a>
        </div>
        <div className="relative">
            <figure>
            <Image src="/_big_about_me.jpg" alt="image of Jon-Michael Dreher" width={500} height={700}/>
            <figcaption className="italic mt-4 text-center">Image of me fishing in Alaska</figcaption>
            </figure>
        </div>
    </section>
)

export default HomeIntro