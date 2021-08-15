import './Header.css';

import Navigation from '../ReusedBlocks/Navigation/Navigation';

import logoPath from '../../images/logo.svg';
import iconAccountPath from '../../images/icon-account.svg';

function Header(){
  return (
    <header className="header">
      <img src={logoPath} alt="" className="logo header__logo"/>
      {/* <nav className="header__navbar">
        <a className="header__register-text" href="https://www.yandex.ru/"> Регистрация</a>
        <button className="button header__button">Войти</button>
      </nav> */}

      <div className="header__profile">
        <Navigation />
        <p className="header__profile-title">Аккаунт</p>
        <div className="header__profile-wrapper">
          <img className="header__profile-image" src={iconAccountPath} alt=""/>
        </div>
      </div>
    </header>
  );
};

export default Header;