

export const FooterList = () => {


    return (
        <div className="grid grid-cols-2 md:flex md:flex-row gap-100 mt-20 mb-40 ml-40 gap-y-20 md:ml-80 text-white font-card">
            <ul>
                <li style={{"listStyleImage":"url(/images/icons/joystick-16.ico)"}}>Juegos</li>
                <li>Playstation</li>
                <li>Xbox</li>
                <li>PC</li>
            </ul>

            <ul>
                <li style={{"listStyleImage":"url(/images/icons/crown.ico)"}}>Coleccionables</li>
                <li>Funko-Pop</li>
                <li>Figuras</li>
            </ul>

            <ul>
                <li style={{"listStyleImage":"url(/images/icons/whatsapp.png)"}}>WhatsApp</li>
                <li style={{"listStyleImage":"url(/images/icons/facebook.ico)"}}>Facebook</li>
                <li style={{"listStyleImage":"url(/images/icons/instagram.png)"}}>Instagram</li>
                <li style={{"listStyleImage":"url(/images/icons/email.ico)"}}>Email</li>
            </ul>
        </div>
    )
}