import './AboutMe.css';
import studentPhotoPath from '../../images/student-photo.jpg';
import iconLink from '../../images/icon-link.svg';

import BlockName from '../ReusedBlocks/BlockName/BlockName';

function AboutMe(){
  return (
    <section className="student">
      <div className="content-wrapper">
        <BlockName name="Студент"/>
        <div className="student__wrapper">
          <div className="student__content">
            <h2 className="student__name">Виталий</h2>
            <h3 className="student__profession">Фронтенд-разработчик, 30 лет</h3>
            <p className="student__autobiography">Я родился и живу в Саратове, закончил   факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал  кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал заниматься  фриланс-заказами и ушёл с постоянной
            работы.</p>
            <ul className="student__unordered-list">
              <li className="student__item-list">
                <a href="#1" className="student__item-link">Facebook</a>
              </li>
              <li className="student__item-list">
                <a href="#2" className="student__item-link">Github</a>
              </li>
            </ul>
          </div>
          <img src={studentPhotoPath} alt="" className="student__image" />
        </div>
        <div className="portfolio">
          <h3 class="portfolio__title">Портфолио</h3>
          <ul class="portfolio__unordered-list">
            <li class="portfolio__item-list">
              <a href="#2" class="portfolio__item-link">Статичный сайт</a>
              <img src={iconLink} alt="" class="portfolio__icon-link" />
            </li>
            <li class="portfolio__item-list">
              <a href="#2" class="portfolio__item-link">Адаптивный сайт</a>
              <img src={iconLink} alt="" class="portfolio__icon-link" />
              </li>
            <li class="portfolio__item-list">
              <a href="#3" class="portfolio__item-link">Одностраничное приложение</a>
              <img src={iconLink} alt="" class="portfolio__icon-link" />
              </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;