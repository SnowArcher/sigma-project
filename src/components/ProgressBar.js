import { useEffect, useState } from "react"

export function ProgressBar() {
    const [fix, setFix] = useState(false);
    function setFixedSidebar() {
      if(window.scrollY >= 80) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixedSidebar);

    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {window.removeEventListener("scroll", onScroll)};
    }, [])
    const percent = scrollTop.toFixed(2);
    return (
        <div className={`progress-wrapper ${fix? 'fixed': ''}`}>
            <div className="progress-wrapper__style" style={{width: `${scrollTop}%`}}>
            </div>
            <div className="progress-wrapper__percent">{`${percent}%`}</div>
        </div>
    )
}