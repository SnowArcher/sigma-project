export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__logo">
                    <img src="../img/footer_logo.svg" alt="logo" />
                    <p>But i must explain to you all this mistaken <br/>idea of dencouncing pleasure.</p>
                </div>
                <div className="footer__quick links">
                    <p>Quick Links</p>
                    <ul>
                        <li>About Our Company</li>
                        <li>Services WE provide</li>
                        <li>Career & Opportunity</li>
                        <li>Privacy & policy</li>
                        <li>Contact US</li>
                    </ul>
                </div>
                <div className="footer__company links">
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
                            <a href='https://uk-ua.facebook.com/' target="_blank" rel="noopener noreferrer">
                                <img src="../img/social-media/facebook.svg" alt="social" />
                            </a>
                        </button>
                        <button>
                            <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">    
                                <img src="../img/social-media/twitter.svg" alt="social" />
                            </a>
                        </button>
                        <button>
                            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                                <img src="../img/social-media/instagram.svg" alt="social" />
                            </a>
                        </button>
                        <button>
                            <a href='https://ua.linkedin.com/' target="_blank" rel="noopener noreferrer">
                                <img src="../img/social-media/linked_in.svg" alt="social" />
                            </a>
                        </button>
                    </div>
                </div>
            </footer>
            <div className="footer__year">Copyright @ {new Date().getFullYear()} <a href="https://github.com/SnowArcher/sigma-project"  target="_blank" rel="noopener noreferrer">Brandoxide</a>.all right reserved.</div>
        </>
    )
}