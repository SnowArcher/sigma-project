export function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <h4>MODERN INTERIOR</h4>
                <h1>Create Your<br />Interior Design.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation.
                </p>
                <button>CONTACT</button>
            </div>
            <div className="hero__img">
                <div className="hero__img_item">
                    <img src="../img/hero_photo.png" alt="hero" />
                </div>
                <div className="hero__img_decore"></div>
            </div>
            <div className="hero__decore">
                <img src="../img/decore.svg" alt="decore"></img>
            </div>
        </div>
    )
}