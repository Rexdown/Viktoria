import { contactsList } from '../../constants'

import './HeaderContacts.scss';

function HeaderContacts() {
  return (
    <div className="headerContacts" id="headerContacts">
      {contactsList.map((item) => (
        <div className="headerContacts__item">
          <img src={item.url} alt="icon" className="headerContacts__item-icon" />
          <p className="headerContacts__item-name">{item.name}</p>
          <p className="headerContacts__item-address">{item.address}</p>
          <p className="headerContacts__item-phone">{item.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default HeaderContacts;
