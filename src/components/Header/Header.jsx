import logo from '../../assets/imgs/logo.svg'
import insta from '../../assets/icons/instagram.svg'
import whats from '../../assets/icons/whatsApp.svg'
import telegr from '../../assets/icons/telegram.svg'
import magnifier from '../../assets/icons/magnifier.svg'

import './Header.scss';

function handleButtonClick(id, method) {
  const hiddenElement = document.getElementById(id)
  hiddenElement.scrollIntoView({block: method, behavior: "smooth"});
}

function Header() {
  return (
    <div className="header-fixed"> 
      <div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        <p className="header-text">
            Высокий профессионализм, научная подготовка и самая эффективная продукция.
        </p>
        <div className="header__socials">
            <img src={insta} alt="instagram" className="header__socials-item" />
            <img src={whats} alt="whatsApp" className="header__socials-item" />
            <img src={telegr} alt="telegram" className="header__socials-item" />
        </div>
        <div className="header__search">
          <input type="text" className="header__search-input" placeholder='Поиск по сайту...'/>
          <img src={magnifier} alt="magnifier" className="header__search-icon" />
        </div>
      </div>
      <div className="navigation">
        <div className="navigation__item" onClick={() => handleButtonClick('aboutUs', 'center')}>
          <p className="navigation__item-text">О компании</p>
        </div>
        <div className="navigation__item" onClick={() => handleButtonClick('services', 'start')}>
          <p className="navigation__item-text">Услуги</p>
        </div>
        <div className="navigation__item" onClick={() => handleButtonClick('reviews', 'center')}>
          <p className="navigation__item-text">Отзывы клиентов</p>
        </div>
        <div className="navigation__item" onClick={() => handleButtonClick('events', 'center')}>
          <p className="navigation__item-text">Звездные гости</p>
        </div>
        <div className="navigation__item" onClick={() => handleButtonClick('application', 'center')}>
          <p className="navigation__item-text">Оставить заявку</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
