import whats from '../../assets/icons/whatsApp-white.svg'
import telegr from '../../assets/icons/telegram-white.svg'
import insta from '../../assets/icons/instagram-white.svg'

import { contactsList } from '../../constants';

import './Footer.scss';

const navs = ['Главная', 'О компании', 'Услуги', 'Акции и новинки', 'Подарочные сертификаты', 'Звездные гости']

function handleButtonClick(id, method) {
  const hiddenElement = document.getElementById(id)
  hiddenElement.scrollIntoView({block: method, behavior: "smooth"});
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left__nav">
          <p className="footer__left__nav-item" onClick={() => handleButtonClick('headerContacts', 'center')}>Главная</p>
          <p className="footer__left__nav-item" onClick={() => handleButtonClick('aboutUs', 'center')}>О компании</p>
          <p className="footer__left__nav-item" onClick={() => handleButtonClick('services', 'start')}>Услуги</p>
          <p className="footer__left__nav-item" onClick={() => handleButtonClick('reviews', 'center')}>Отзывы клиентов</p>
          <p className="footer__left__nav-item" onClick={() => handleButtonClick('events', 'center')}>Звездные гости</p>
          <p className="footer__left__nav-item" onClick={() => handleButtonClick('application', 'center')}>Оставить заявку</p>
        </div>
        <p className="footer__left-info">© Все права защищены.</p>
        <p className="footer__left-info">Салоны красоты и здоровья «Victoria» Саратов</p>
      </div>

      <div className="footer__midle">
        <div className="footer__midle__contacts">
          {contactsList.map((item) => (
            <div className="footer__midle__contacts__item">
              <p className="footer__midle__contacts__item-name">{item.name}</p>
              <p className="footer__midle__contacts__item-adress">{item.address}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__right">
        <div className="footer__right__politics">
          <p className="footer__right__politics-item">Уголок потребителя</p>
          <p className="footer__right__politics-item">Правила пользования сайтом</p>
          <p className="footer__right__politics-item">Политика обработки персональных данных</p>
        </div>
        <div className="footer__right__social">
          <img src={insta} alt="" className="footer__right__social-item" />
          <img src={whats} alt="" className="footer__right__social-item" />
          <img src={telegr} alt="" className="footer__right__social-item" />
        </div>
        <div className="footer__right__developer">
          <p className="footer__right__developer-text">Разработка сайта:</p>
          <p className="footer__right__developer-name">Максим Филиппов</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
