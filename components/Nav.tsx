'use client'

import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressCard, faBars, faHouse, faMapLocationDot, faX } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
config.autoAddCss = false

const Nav = () => {
    const [activeNav, setActiveNav] = useState(false)

    return (
    <>
        <nav role="navigation" aria-label="Main menu" className="md:hidden">
            {
                !activeNav ? (
                    <button onClick={() => setActiveNav(!activeNav)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                ) : (
                    <div className="w-dvw h-dvh z-10">
                        <button aria-expanded="true" aria-controls="main-menu" onClick={() => setActiveNav(!activeNav)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        <ul className="flex flex-col">
                            <a href="#home" className="pl-6 cursor-pointer hover:text-amber-400 focus:text-amber-400 active:text-amber-600 target:bg-red">Home</a>
                            <a href="#about" className="pl-6 cursor-pointer hover:text-amber-400 focus:text-amber-400 active:text-amber-600">About</a>
                            <a href="#contact" className="pl-6 cursor-pointer hover:text-amber-400 focus:text-amber-400 active:text-amber-600">Experience</a>
                        </ul>
                    </div>
                )
            }
        </nav>
        <div id="#nav" className="hidden md:flex flex-col w-[16rem] h-dvh justify-between bg-gray-950 fixed">
            <div>
                <div className="w-24 h-24 relative translate-x-3/4 mt-6 mb-16">
                    <Image src="/about-me.jpg" alt="head shot of Jon-Michael Dreher" fill={true} objectFit="cover" className="border-2 rounded-full"/>
                </div>
                <nav className="flex flex-col gap-y-4">
                    <a href="#home" className="pl-6 cursor-pointer hover:text-amber-400 focus:text-amber-400 active:text-amber-600 target:bg-red"><FontAwesomeIcon icon={faHouse} className="mr-3" />Home</a>
                    <a href="#about" className="pl-6 cursor-pointer hover:text-amber-400 focus:text-amber-400 active:text-amber-600"><FontAwesomeIcon icon={faAddressCard} className="mr-3" />About</a>
                    <a href="#contact" className="pl-6 cursor-pointer hover:text-amber-400 focus:text-amber-400 active:text-amber-600"><FontAwesomeIcon icon={faMapLocationDot} className="mr-3"/>Experience</a>
                </nav>
            </div>

            <div className="flex justify-evenly pb-3">
                <a href="https://www.instagram.com/jdreher/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-amber-400" />
                </a>
                <a href="https://www.linkedin.com/in/jonmichaeldreher/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-amber-400" />
                </a>
            </div>
        </div>
    </>
    )
}

export default Nav