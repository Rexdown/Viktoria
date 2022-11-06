import { useState } from 'react';

import spaMain from '../../assets/imgs/SPA-main.svg';
import spaBg from '../../assets/imgs/SPA-bg.svg';
import spaActiveBg from '../../assets/imgs/SPA-active-bg.svg';

import weightLossMain from '../../assets/imgs/weightLoss-main.svg';
import weightLossBg from '../../assets/imgs/weightLoss-bg.svg';
import weightLossActiveBg from '../../assets/imgs/weightLoss-active-bg.svg';

import cosmeticMain from '../../assets/imgs/cosmetic-main.svg';
import cosmeticBg from '../../assets/imgs/cosmetic-bg.svg';
import cosmeticActiveBg from '../../assets/imgs/cosmetic-active-bg.svg';

import makeUpMain from '../../assets/imgs/makeUp-main.svg';
import makeUpBg from '../../assets/imgs/makeUp-bg.svg';
import makeUpActiveBg from '../../assets/imgs/makeUp-active-bg.svg';

import barbershopMain from '../../assets/imgs/barbershop-main.svg';
import barbershopBg from '../../assets/imgs/barbershop-bg.svg';
import barbershopActiveBg from '../../assets/imgs/barbershop-active-bg.svg';

import bodyMain from '../../assets/imgs/body-main.svg';
import bodyBg from '../../assets/imgs/body-bg.svg';
import bodyActiveBg from '../../assets/imgs/body-active-bg.svg';

import faceMain from '../../assets/imgs/face-main.svg';
import faceBg from '../../assets/imgs/face-bg.svg';
import faceActiveBg from '../../assets/imgs/face-active-bg.svg';

import menMain from '../../assets/imgs/men-main.svg';
import menBg from '../../assets/imgs/men-bg.svg';
import menActiveBg from '../../assets/imgs/men-active-bg.svg';

import manicureMain from '../../assets/imgs/manicure-main.svg';
import manicureBg from '../../assets/imgs/manicure-bg.svg';
import manicureActiveBg from '../../assets/imgs/manicure-active-bg.svg';

import { contactsList } from '../../constants'

import point from '../../assets/icons/service-point.svg'

import './Services.scss';

const directions = ['Направление', 'Направление', 'Направление', 'Направление', 'Направление'];

function Services() {
  const [activeNav, setActiveNav] = useState(0)

  return (
    <div className="services" id="services">
        <div className="services__header">
            <h2 className="services__header-title">Наши услуги</h2>
            <div className="services__header__nav">
                {contactsList.map((item) => (
                    <div 
                        className={`services__header__nav__item${item.id === activeNav ? '-active' : ''}`}
                        onClick={() => setActiveNav(item.id)}
                    >   
                        {
                            item.id !== activeNav 
                            ? <img src={item.url} alt="icon" className="services__header__nav__item-icon" />
                            : <img src={item.urlActive} alt="icon" className="services__header__nav__item-icon" />
                        }
                        <p className={`services__header__nav__item-text${item.id === activeNav ? '-active' : ''}`}>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="services__list">
            <div className="services__item">
                <img src={spaMain} alt="spa" className="services__item-mainImg spaImg" />
                <img src={spaBg} alt="bg" className="services__item-bgImg spaBg" />
                <img src={spaActiveBg} alt="bg" className="services__item-bgActiveImg spaBg" />

                <h3 className="services__item-title">SPA</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={weightLossMain} alt="weight loss" className="services__item-mainImg weightLossImg" />
                <img src={weightLossBg} alt="bg" className="services__item-bgImg weightLossBg" />
                <img src={weightLossActiveBg} alt="bg" className="services__item-bgActiveImg weightLossBg" />

                <h3 className="services__item-title">Снижение веса</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={cosmeticMain} alt="cosmetic" className="services__item-mainImg cosmeticImg" />
                <img src={cosmeticBg} alt="bg" className="services__item-bgImg cosmeticBg" />
                <img src={cosmeticActiveBg} alt="bg" className="services__item-bgActiveImg cosmeticBg" />

                <h3 className="services__item-title">Косметология</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={makeUpMain} alt="spa" className="services__item-mainImg makeUpImg" />
                <img src={makeUpBg} alt="bg" className="services__item-bgImg makeUpBg" />
                <img src={makeUpActiveBg} alt="bg" className="services__item-bgActiveImg makeUpBg" />

                <h3 className="services__item-title">Визаж</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={barbershopMain} alt="weight loss" className="services__item-mainImg barbershopImg" />
                <img src={barbershopBg} alt="bg" className="services__item-bgImg barbershopBg" />
                <img src={barbershopActiveBg} alt="bg" className="services__item-bgActiveImg barbershopBg" />

                <h3 className="services__item-title">Парикмахерские услуги</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={bodyMain} alt="cosmetic" className="services__item-mainImg bodyImg" />
                <img src={bodyBg} alt="bg" className="services__item-bgImg bodyBg" />
                <img src={bodyActiveBg} alt="bg" className="services__item-bgActiveImg bodyBg" />

                <h3 className="services__item-title">Уход за телом</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={faceMain} alt="spa" className="services__item-mainImg faceImg" />
                <img src={faceBg} alt="bg" className="services__item-bgImg faceBg" />
                <img src={faceActiveBg} alt="bg" className="services__item-bgActiveImg faceBg" />

                <h3 className="services__item-title">Уход за лицом</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={menMain} alt="weight loss" className="services__item-mainImg menImg" />
                <img src={menBg} alt="bg" className="services__item-bgImg menBg" />
                <img src={menActiveBg} alt="bg" className="services__item-bgActiveImg menBg" />

                <h3 className="services__item-title">Программы для мужчин</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>

            <div className="services__item">
                <img src={manicureMain} alt="cosmetic" className="services__item-mainImg manicureImg" />
                <img src={manicureBg} alt="bg" className="services__item-bgImg manicureBg" />
                <img src={manicureActiveBg} alt="bg" className="services__item-bgActiveImg manicureBg" />

                <h3 className="services__item-title">Маникюр и педикюр</h3>

                {directions.map((item) => (
                    <div className="services__item__direction">
                        <img src={point} alt="point" className="services__item__direction-point" />
                        <p className="services__item__direction-text">{item}</p>
                    </div>
                ))}

                <button className="services__item-button">Подробнее</button>
            </div>
        </div>
    </div>
  );
}

export default Services;
