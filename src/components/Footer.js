export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src="../img/footer_logo.svg" alt="logo" />
                <p>But i must explain to you all this mistaken <br/>idea of dencouncing pleasure.</p>
            </div>
            <div className="footer__quick">
                <p>Quick Links</p>
                <ul>
                    <li>About Our Company</li>
                    <li>Services WE provide</li>
                    <li>Career & Opportunity</li>
                    <li>Privacy & policy</li>
                    <li>Contact US</li>
                </ul>
            </div>
            <div className="footer__company">
                <p>Company</p>
                <ul>
                    <li>About Company</li>
                    <li>Our Testimonials</li>
                    <li>Latest News</li>
                    <li>Our misson</li>
                    <li>Get a free Quot</li>
                </ul>
            </div>
            <div className="footer__contact">
                <p>Contact us</p>
                <ul>
                    <li>Sagrada Familia, Herba</li>
                    <li>Street Front USA</li>
                    <li>brandoxide@gmail.com</li>
                    <li>002-568423591</li>
                </ul>
            </div>
            <div className="footer__social">
                <p>Follow Us</p>
                <div className="footer__social_items">
                    <button>
                        <img src="../img/social-media/facebook.svg" alt="social" />
                    </button>
                    <button>
                        <img src="../img/social-media/twitter.svg" alt="social" />
                    </button>
                    <button>
                        <img src="../img/social-media/instagram.svg" alt="social" />
                    </button>
                    <button>
                        <img src="../img/social-media/linked_in.svg" alt="social" />
                    </button>
                </div>
            </div>
        </footer>
    )
}