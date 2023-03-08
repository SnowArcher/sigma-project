
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export function ClientsSays() {
    return (
        <div className="clients-says">
            <h4>TESTIMONIALS</h4>
            <h1>Client says about us</h1>
            <div className="clients-says__slider">
                <Swiper
                    loop = {true}
                    autoHeight = {true}
                >
                    <SwiperSlide>
                        <div className="says-slide">
                            <div className="says-slide__content">
                                <div className='says-slide__content_photo'>
                                    <div className='person-photo'>
                                        <img src="../img/client_photo_1.jpg" alt="person" />
                                    </div>
                                </div>
                                <div className='says-slide__content_message'>
                                    <h1>Louis Saville<span>/CEO at Google inc</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua.</p>
                                    <img src="../img/client_decore.svg" alt="decore" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        slide 2
                    </SwiperSlide>
                    <SwiperSlide>
                        slide 3
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}