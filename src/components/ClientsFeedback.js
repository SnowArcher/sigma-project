export function ClientsFeedback() {
    return (
        <div className="says-slide">
            <div className="says-slide__content">
                <div className='says-slide__content_photo'>
                    <div className='person-photo'>
                        <img src="../img/client_photo_1.jpg" alt="person" />
                    </div>
                </div>
                <div className='says-slide__content_message'>
                    <h1>
                        <span>Louis Saville </span>
                        <span>/CEO at Google inc</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img className="message-decore" src="../img/client_decore.svg" alt="decore" />
                </div>
            </div>
            <div className="says-slide__content">
                <div className='says-slide__content_photo'>
                    <div className='person-photo'>
                        <img src="../img/client_photo_2.jpg" alt="person" />
                    </div>
                </div>
                <div className='says-slide__content_message'>
                    <h1>
                        <span>Rekha Varadwaz </span>
                        <span>/Manager at Nike inc</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img className="message-decore" src="../img/client_decore.svg" alt="decore" />
                </div>
            </div>
        </div>
    )
}