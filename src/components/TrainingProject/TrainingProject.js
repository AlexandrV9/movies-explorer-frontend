import './TrainingProject.css'

function TrainingProject(){
  return (
    <section className="training-project">
      <dev className="training-project__wrapper">
      <h1 className="training-project__title">Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="training-project__unordered-list">
          <li className="training-project__list-item"><a href="#dd" className="training-project__link-item">О проекте</a></li>
          <li className="training-project__list-item"><a href="#dd" className="training-project__link-item">Технологии</a></li>
          <li className="training-project__list-item"><a href="#dd"   className="training-project__link-item">Студент</a></li>
        </ul>
      </dev>
    </section>
  );
}

export default TrainingProject;