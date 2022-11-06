import { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import aboutUsImg from '../../assets/imgs/aboutUsImg.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './AboutUs.scss';

function AboutUs() {
  const [slideCount, setSlideCount] = useState(0);

  return (
    <div className="aboutUs" id="aboutUs">
      <div className="aboutUs__description">
        <h2 className="aboutUs__description-title">О нас</h2>
        <p className="aboutUs__description-text">
        «Victoria» — элитный салон красоты для всей семьи, раскроет Вашу индивидуальность 
        и красоту, оздоровит тело и дух. Мы добиваемся этого с помощью профессионализма сотрудников, 
        использования современных аппаратных методов эстетической медицины и косметологических 
        инноваций на уровне нанотехнологий. Каждый наш клиент — любимый клиент! Мы стремимся стать 
        главным помощником и советником в области ухода за собой, омоложения и релакса. 
        Любая эстетическая проблема решаема и мы предлагаем Вам наши знания, опыт и умение, 
        оптимально сочетая результат и удовольствие!
        </p>
        <p className="aboutUs__description-postscriptum">Нам доверяют, мы гарантируем!</p>
      </div>

      <div className="aboutUs__slider">
        <Swiper
          className='aboutSlide'
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setSlideCount(swiper.activeIndex + 1)}
          onSwiper={(swiper) => setSlideCount(swiper.activeIndex + 1)}
        >
          <SwiperSlide><img src={aboutUsImg} alt="Banner" className="aboutUs__slider-img" /></SwiperSlide>
          <SwiperSlide><img src={aboutUsImg} alt="Banner" className="aboutUs__slider-img" /></SwiperSlide>
          <SwiperSlide><img src={aboutUsImg} alt="Banner" className="aboutUs__slider-img" /></SwiperSlide>
          <SwiperSlide><img src={aboutUsImg} alt="Banner" className="aboutUs__slider-img" /></SwiperSlide>

          <p className="aboutSlide-counter">{`${slideCount} / 4`}</p>
        </Swiper>
      </div>
    </div>
  );
}

export default AboutUs;
