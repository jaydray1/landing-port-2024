import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Nav = () => (
    <div className="flex flex-col w-[20rem] h-lvh justify-between">
        <nav>
            <a className="pl-6">Home</a>
            <hr />
            <a className="pl-6">About</a>
            <hr />
            <a className="pl-6">Experience</a>
        </nav>

        <div className="flex justify-evenly">
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