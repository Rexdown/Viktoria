/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviewsMessages } from '../../constants'

import arrow from '../../assets/icons/arrow-red.svg'
import iphone from '../../assets/imgs/iphone.png'
import addIconOne from '../../assets/imgs/addIconOne.svg'
import addIconTwo from '../../assets/imgs/addIconTwo.svg'
import addIconThree from '../../assets/imgs/addIconThree.svg'
import socialImg from '../../assets/imgs/socialImg.png'
import socialImgTwo from '../../assets/imgs/socialImgTwo.png'
import socialImgThree from '../../assets/imgs/socialImgThree.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Reviews.scss';

function Reviews() {
  const [slideCount, setSlideCount] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="reviews" id="reviews">
      <div className="reviews__message">
        <h2 className="reviews-title">Отзывы наших клиентов</h2>

        <div className="reviews__slider">
          <Swiper
            className='reviewsMessageSlide'
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setSlideCount(swiper.activeIndex + 1)}
            onSwiper={(swiper) => setSlideCount(swiper.activeIndex + 1)}
          >
            {reviewsMessages.map((item) => (
              <SwiperSlide>
                <div className="reviews__message__header">
                  <h2 className="reviews__message__header-title">{item.name}</h2>
                  <p className="reviews__message__header-data">{item.data}</p>
                </div>
                <p className="reviews__message-text">{item.textOne}</p>
                <p className="reviews__message-text">{item.textTwo}</p>
                <div className="reviews__message__original">
                  <a href="#" className="reviews__message__original-text">
                    Читать оригинал отзыва
                  </a>
                  <img src={arrow} alt="arrow" className="reviews__message__original-arrow" />
                </div>
              </SwiperSlide>
            ))}

            <p className="reviewsMessageSlide-counter">{`${slideCount} / 3`}</p>
          </Swiper>
        </div>
      </div>

      <div className="reviews__social">
        <img src={iphone} alt="iphone" className="reviews__social-phone" />
        <img src={addIconOne} alt="" className="reviews__social-addIconOne" />
        <img src={addIconTwo} alt="" className="reviews__social-addIconTwo" />
        <img src={addIconThree} alt="" className="reviews__social-addIconThree" />
        <div className="reviews__social-item">
          <Swiper
            className='reviewsSocialSlide'
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide><img src={socialImg} alt="Banner" className="reviews__social-history" /></SwiperSlide>
            <SwiperSlide><img src={socialImgTwo} alt="Banner" className="reviews__social-history" /></SwiperSlide>
            <SwiperSlide><img src={socialImgThree} alt="Banner" className="reviews__social-history" /></SwiperSlide>
          </Swiper>

          <div className='Prev' ref={prevRef} />
          <div className='Next' ref={nextRef} />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
