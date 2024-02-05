import {Link} from 'react-router-dom'

const Public = () => {
    const content = (
    <div className="public">
        <header>
            <h1>Welcome to <span className="nowrap">MERN-TechNotes</span>
            </h1>
        </header>

        <main className="public__main">
            <p>Located in Panorama Platform</p>
            <address className="public__addr">
                Daniel's Chatroom<br/>
                555 Panorama Platform<br/>
                Enjoyable City<br/>
                <a href="tel:+15555555555">(555) 555-5555</a>
            </address>
            <br/>
            <p>Owner: Daniel Chan</p>
        </main>

        <footer >
            <Link to="/login">Login</Link>
        </footer>
    </div>
)
    return content
}

export default Public