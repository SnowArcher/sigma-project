import { useEffect, useState } from "react"

export function ProgressBar() {
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
    return (
        <div className="progress-wrapper">
            <div className="progress-wrapper__style" style={{width: `${scrollTop}%`}}>
            </div>
            <div className="progress-wrapper__percent">{`${scrollTop}%`}</div>
        </div>
    )
}