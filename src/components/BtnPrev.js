import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { useState } from 'react';

export function BtnPrev() {
    const swiper = useSwiper();
    const [isHover, setHover] = useState(false);
    return (
        <button className="btnPrev" onClick={() => swiper.slidePrev()} onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
           <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99353 1L1.99353 5L5.99353 9" stroke={`${isHover?  "white":"#646464"}`} strokeWidth="2"/>
            </svg>
        </button>
    )
}