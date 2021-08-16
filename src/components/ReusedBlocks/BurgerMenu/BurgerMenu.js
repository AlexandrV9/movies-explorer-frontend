import './BurgerMenu.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import iconAccountPath from '../../../images/icon-account.svg';
import '../../Header/Header.css'

function BurgerMenu () {

  const [buttonBurger, setButtonBurger] = React.useState(false);

  const handleButtonBurgerClick = (event) => {

    if(event.target.classList.contains('header__burger')) {
      if(buttonBurger){
        setButtonBurger(false);
      }
      else {
        setButtonBurger(true);
      }
      return document.body.classList.toggle('page_lock');
      // event.target.classList.toggle('active');
    }
    if(event.target.classList.contains('header__burger-span')){
      // event.target.parentElement.classList.toggle('active');
      if(buttonBurger){
        setButtonBurger(false);
      }
      else {
        setButtonBurger(true);
      }
      return document.body.classList.toggle('page_lock');
    }
    
  }

  return (
    <>
    {/* Для старницы фильмов 1280px */}
      <div className={`header__navbar-wrapper ${buttonBurger ? 'header__navbar-wrapper_active' : ''}`}>
      <div className={`header__burger ${buttonBurger ? 'header__burger_active' : ''}`} onClick={handleButtonBurgerClick}>
        <span className={`header__burger-span ${buttonBurger ? 'header__burger-span_active' : ''}`}></span>
      </div>
        
      <div className={`header__navbar ${buttonBurger ? 'header__navbar_active' : ''}`}>
        <nav className={`header__menu ${buttonBurger ? 'header__menu_active' : ''}`}>
          <ul className="header__menu-unordered-list">
            <li className="header__menu-list-item">
              <a className="header__menu-link-item" href="#4">Главная</a>
            </li>
            <li className="header__menu-list-item">
              <a className="header__menu-link-item" href="#4">Фильмы</a>
            </li>
            <li className="header__menu-list-item">
              <a className="header__menu-link-item" href="#4">Сохранённые фильмы</a>
            </li>
          </ul>
        </nav>

        <div className="header__profile">
          <p className="header__profile-title">Аккаунт</p>
          <div className="header__profile-wrapper">
            <img className="header__profile-image" src={iconAccountPath} alt=""/>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default BurgerMenu;