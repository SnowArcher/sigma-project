export function LatestNews() {
    return (
        <div className="latest-news" id='blog'>
            <h4>LETEST NEWS</h4>
            <h1>From Our Blog</h1>
            <div className="latest-news__content">
                <div className="latest-news__content_item">
                    <div className="item__content">
                        <div className="item__content_img">
                            <img src="../img/news_1.png" alt="news"/>
                        </div>
                        <div className="item__content_decore"></div>
                    </div>
                    <h1>2020 Interior Design Trends</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
incididunt ut labore et dolore magna aliqua.</p>
                    <button>CONTINUE READING....</button>
                </div>
                <div className="latest-news__content_item">
                    <div className="item__content">
                        <div className="item__content_img">
                            <img src="../img/news_2.png" alt="news"/>
                        </div>
                        <div className="item__content_decore"></div>
                    </div>
                    <h1>28 Notable Product at ARC Interior Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
incididunt ut labore et dolore magna aliqua.</p>
                    <button>CONTINUE READING....</button>
                </div>
            </div>
        </div>
    )
}