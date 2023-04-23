import { Link } from "react-router-dom"


export const FooterList = () => {


    return (
        <div className="grid grid-cols-2 mx-50 mb-20 md:flex md:flex-row gap-100 mt-20 mb-40 ml-40 gap-y-20 md:ml-80 text-white font-card">
            <ul>
                <li style={{"listStyleImage":"url(/images/icons/joystick-16.ico)"}}>Juegos</li>
                <Link className="text-white" to={"/juegos/playstation"}><li>Playstation</li></Link>
                <Link className="text-white" to={"/juegos/xbox"}><li>Xbox</li></Link>
                <Link className="text-white" to={"/juegos/pc"}><li>PC</li></Link>
            </ul>

            <ul>
                <li style={{"listStyleImage":"url(/images/icons/crown.ico)"}}>Coleccionables</li>
                <Link className="text-white" to={"/coleccionables/funkos"}><li>Funko-Pop</li></Link>
                <Link className="text-white" to={"/coleccionables/figuras"}><li>Figuras</li></Link>
            </ul>

            <ul>
                <li style={{"listStyleImage":"url(/images/icons/whatsapp.png)"}}><a className="text-white" href="https://wa.link/9vpe4i">WhatsApp</a></li>
                <li style={{"listStyleImage":"url(/images/icons/facebook.ico)"}}><a className="text-white" href="https://www.facebook.com">Facebook</a></li>
                <li style={{"listStyleImage":"url(/images/icons/instagram.png)"}}><a className="text-white" href="https://www.instagram.com">Instagram</a></li>
                <li style={{"listStyleImage":"url(/images/icons/email.ico)"}}><a className="text-white" href="mailto:mail@mail.com">Email</a></li>
            </ul>
        </div>
    )
}