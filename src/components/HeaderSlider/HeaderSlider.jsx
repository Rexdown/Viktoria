import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bgOne from '../../assets/imgs/bg-1.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HeaderSlider.scss';

function HeaderSlider() {
  return (
      <div className="headerSlider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide><img src={bgOne} alt="Banner" className="headerSlider-img" /></SwiperSlide>
          <SwiperSlide><img src={bgOne} alt="Banner" className="headerSlider-img" /></SwiperSlide>
          <SwiperSlide><img src={bgOne} alt="Banner" className="headerSlider-img" /></SwiperSlide>
          <SwiperSlide><img src={bgOne} alt="Banner" className="headerSlider-img" /></SwiperSlide>
        </Swiper>
      </div>
  );
}

export default HeaderSlider;
