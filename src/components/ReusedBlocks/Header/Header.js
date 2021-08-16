import './Header.css';
import logoPath from '../../../images/logo.svg';

function Header(){
  return (
    <header className="header">
      <img src={logoPath} alt="" className="logo header__logo"/>
      <nav className="header__navbar">
        <a className="header__register-text" href="https://www.yandex.ru/"> Регистрация</a>
        <button className="button header__button">Войти</button>
      </nav>
    </header>
  );
};

export default Header;