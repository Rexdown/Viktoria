import { useState } from 'react';
import InputMask from 'react-input-mask';

import arrow from '../../assets/icons/smallArrow.svg'
import checkbox from '../../assets/icons/checkbox.svg'
import admin from '../../assets/imgs/admin.png'
import adminBg from '../../assets/imgs/admin-bg.svg'

import { options } from '../../constants';

import './Application.scss';

function PhoneInput(props) {
    return (
      <InputMask 
        mask='+7 (999) 999 - 99 - 99' 
        value={props.value} 
        onChange={props.onChange}
        className="application__forms-item"
        placeholder='+7 (___) ___ - __ - __' 
      >
      </InputMask>
    );
  }

function Application() {
  const [activeSelect, setActiveSelect] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [phone, setPhone] = useState('');
  const handleInput = ({ target: { value } }) => setPhone(value);

  return (
    <div className="application" id="application">
      <div className="application__forms">
        <input
          type="text"
          placeholder='ФИО'
          className="application__forms-item"
        />
        <PhoneInput 
          value={phone} 
          onChange={handleInput}>
        </PhoneInput>
        <div
          className={`application__forms__select${activeSelect ? '-active' : ''}`}
          onClick={() => setActiveSelect(!activeSelect)}
        >
          <p className="application__forms__select-text">{options[activeOption].text}</p>
          <img src={arrow} alt="arrow" className={`application__forms__select-arrow${activeSelect ? '-active' : ''}`} />
          <div className={`application__forms__select__options${activeSelect ? '-active' : ''}`}>
            {options.map((item) => (
              <p
                className={`application__forms__select__options-item${activeSelect ? '-active' : ''}`}
                onClick={() => setActiveOption(item.id)}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <button className="application__forms-button">Оставить заявку</button>
        <div className="application__forms__agree">
          <img src={checkbox} alt="checkbox" className="application__forms__agree-checkbox" />
          <p className="application__forms__agree-text">Согласен на обработку персональных данных</p>
        </div>
      </div>

      <div className="application__admin">
        <img src={admin} alt="admin" className="application__admin-ava" />
        <img src={adminBg} alt="admin" className="application__admin-bg" />
        <div className="application__admin__text">
          <p className="application__admin__text-name">Екатерина</p>
          <p className="application__admin__text-post">Aдминистратор</p>
        </div>
      </div>
    </div>
  );
}

export default Application;
