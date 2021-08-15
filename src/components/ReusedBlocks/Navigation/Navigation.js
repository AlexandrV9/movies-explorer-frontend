import './Navigation.css';

function Navigation () {
  return (
    <div className="navbar">
      <nav>
        <ul class="navbar__unordered-list">
          <li class="navbar__item-list">
            <a href="#2" class="navbar__item-link">Фильмы</a>
          </li>
          <li class="navbar__item-list">
            <a href="#2" class="navbar__item-link">Сохранённые фильмы</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;