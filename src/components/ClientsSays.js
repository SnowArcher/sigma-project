
import { Swiper, SwiperSlide } from 'swiper/react';
import {ClientsFeedback} from './ClientsFeedback';
import { BtnNext } from './BtnNext';
import { BtnPrev } from './BtnPrev';
import 'swiper/css';
export function ClientsSays() {
    return (
        <div className="clients-says">
            <h4>TESTIMONIALS</h4>
            <h1>Client says about us</h1>
            <div className="clients-says__slider">
                <Swiper
                    loop = {true}
                >
                    <BtnNext />
                    <BtnPrev />
                    <SwiperSlide>
                        <ClientsFeedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientsFeedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientsFeedback />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}