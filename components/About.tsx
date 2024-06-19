'use client'

import TypingAnimation from "@/utillities/Typer"
import Image from 'next/image'

const About = () => (
    <section className="grid grid-cols-2 gap-8 w-[64rem]">
        <div>
            <h2>About</h2>
            <TypingAnimation />
            <p>Introduction description</p>
        </div>
        <div>
            <Image src="/_big_about_me.jpg" alt="image of Jon-Michael Dreher" width={100} height={100} />
        </div>
    </section>
)

export default About