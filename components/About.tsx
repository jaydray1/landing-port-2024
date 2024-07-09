'use client'

import Image from 'next/image'

const About = () => (
    <section id="about" className="grid grid-cols-2 gap-20 w-[64rem] flex self-center items-center h-screen">
        <div className="relative">
            <figure>
                <Image src="/_home-banner.jpg" alt="image of Jon-Michael Dreher" width={500} height={700}/>
                <figcaption className="italic mt-4 text-center">Image of me smiling :)</figcaption>
            </figure>
        </div>
        <div>
            <h2 className="uppercase tracking-widest text-3xl before:bg-amber-400 before:h-px before:block before:w-16 before:my-6 before:absolute before:mt-12 after:w-1.5 after:h-1.5 after:rounded-full after:absolute after:bg-amber-400 after:my-[2.87rem] after:mr-0 after:mx-[-8.2rem]">About me.</h2>
            <h3 className="mt-6 text-xl">{`I'm`} a Frontend Engineer with over 6 years of
            experience.{" "}</h3>
            <p className='my-6 tracking-wide'>{` 
                I call the Wasatch Mountains of Salt Lake City home. 
                I integrate seanlessly with motivated, intelligent, 
                and passionate engineers and managers to bring ideas 
                and products to market and life quickly and efficiently. 
                I tie my goals as an engineer into the goals of the companies 
                I partner with so we can reap the benefits of help and success 
                along with our customers and clients.`}</p>
        </div>
    </section>
)

export default About