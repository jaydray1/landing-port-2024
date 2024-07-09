'use client'

import { experienceSet } from '@/app/experienceSet'
import Image from 'next/image'

const Experience = () => (
    <section id="experience" className="gap-5 lg:w-[64rem] flex-col flex self-center lg:h-screen justify-center">
        <h2 className="uppercase tracking-widest text-3xl before:bg-amber-400 before:h-px before:block before:w-16 before:my-6 before:absolute before:mt-12 after:w-1.5 after:h-1.5 after:rounded-full after:absolute after:bg-amber-400 after:my-[45px] after:mr-0 after:mx-[-10rem] mb-8 lg:mb-16">Experience.</h2>
        {experienceSet.map((experience) => (
            <div key={experience.companyName} >
                <div className='flex lg:w-[64rem] bg-slate-800 h-52 gap-10 items-center'>
                    <div>
                        <Image className="bg-white ml-4" src={experience.image} alt="image of Jane logo" width={150} height={150}/>
                    </div>
                    <div>
                        <h4 className="mb-2 font-bold tracking-wider text-lg">{experience.title}</h4>
                        <div className="mb-2 italic">{experience.dates}</div>
                        <p className="mb-2">{experience.description.longText}</p>
                        {experience.description.bullets && (
                            <ul>
                                {experience.description.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
                            </ul>
                        )}
                    </div>
                    <div></div>
                </div>
            </div>
        ))}
    </section>
)

export default Experience