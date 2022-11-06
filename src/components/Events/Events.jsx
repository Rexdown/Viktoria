import { useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { eventsItems } from '../../constants'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Events.scss';

function Events() {
  const [slideCount, setSlideCount] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="events" id="events">
      <Swiper
        className='eventsSlide'
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={(swiper) => setSlideCount(swiper.activeIndex + 1)}
        onSwiper={(swiper) => setSlideCount(swiper.activeIndex + 1)}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >

        {eventsItems.map((item) => (
          <SwiperSlide>
            <div className="events__box">
              <div className="events__about">
                <h3 className="events__about-title">{item.title}</h3>
                {item.text.split(/\r\n|\r|\n/g).map((txt) => (
                  <div className="events__about-text">{txt}</div>
                ))}
              </div>

              <Swiper
                className='events__album'
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
              >
                {item.imgs.map((url) => (
                  <SwiperSlide><img src={url} alt="Banner" className="events__album-img" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='eventPrev' ref={prevRef} />
      <p className="events-counter">{`${slideCount} / 3`}</p>
      <div className='eventNext' ref={nextRef} />
    </div>
  );
}

export default Events;
