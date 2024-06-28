import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Nav = () => (
    <div className="flex flex-col w-[16rem] h-dvh justify-between">
        <div className="w-24 h-24 relative translate-x-3/4 mt-6">
            <Image src="/about-me.jpg" alt="head shot of Jon-Michael Dreher" fill={true} objectFit="cover" className="border-2 rounded-full"/>
        </div>
        <nav>
            <a className="pl-6">Home</a>
            <hr />
            <a className="pl-6">About</a>
            <hr />
            <a className="pl-6">Experience</a>
        </nav>

        <div className="flex justify-evenly pb-3">
            <a href="https://www.instagram.com/jdreher/" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/jonmichaeldreher/" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    </div>
)

export default Nav