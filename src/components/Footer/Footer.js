import './Footer.css';

function Footer(){
  return (
    <footer className="footer">
      <p className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__content-wrapper">
        <nav>
          <ul class="footer__unordered-list">
            <li class="footer__item-list"><a href="#d" class="footer__item-link">Яндекс.Практикум</a></li>
            <li class="footer__item-list"><a href="@d" class="footer__item-link">Github</a></li>
            <li class="footer__item-list"><a href="#df" class="footer__item-link">Facebook</a></li>
          </ul>
        </nav>
      <p className="footer__copyright">&copy;2021</p>
      </div>
    </footer>
  );
}

export default Footer;