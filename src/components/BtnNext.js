import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { useState } from 'react';

export function BtnNext() {
    const swiper = useSwiper();
    const [isHover, setHover] = useState(false);
    return (
        <button className="btnNext" onClick={() => swiper.slideNext()} onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.99353 1L4.99353 5.5L0.99353 10" stroke={`${isHover?  "white":"#646464"}`} strokeWidth="2"/>
            </svg>
        </button>
    )
}