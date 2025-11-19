import { Link } from "react-router"
import Button from "./base/Button"

function Navbar() {
    return (
        <nav className="rounded-full w-full bg-white p-2 shadow-sm flex justify-between">
            <Button variant="text"><Link to="/">RESUMEIQ</Link></Button>

            <Button><Link to="/upload">Upload Resume</Link></Button>
        </nav>
    )
}

export default Navbar