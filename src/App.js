import './index.scss';
import CardCourse from './components/cardCourse';
import CardTest from './components/cardTest';

const arrCardCourse = [
  {title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png'},
  {title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png'},
  {title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png'},
  {title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png'},
];

const arrCardTest = [
  {title: "Название теста", description: 'Описание теста в две-три строки', imgUrl: '/img/card-test.jpg'},
  {title: "Название теста", description: 'Описание теста в две-три строки', imgUrl: '/img/card-test.jpg'},
  {title: "Название теста", description: 'Описание теста в две-три строки', imgUrl: '/img/card-test.jpg'},


];

function App() {
  return (
    <div> 
      <section className="section-1"> 
      <div className="wrapper clear">
      <header className="d-flex justify-between align-center"> 
        <div className="headerLeft d-flex align-center">
          <img width = {306} height = {100} src="/img/logo.png" alt="Логотип компании ТИТАН"/>
          
        </div>
        <div>
          <ul className="headerCenter d-flex ">
            <li className="mr-50">
              <a href='#' className='header-link'>Тестирования</a>
              </li>
            <li className="mr-50">
              <a href='#' className='header-link'>Мои результаты</a>
              </li>
            <li>
              <a href='#' className='header-link'>Администартору</a>
              </li>
          </ul>
        </div>
        <div className = "cardReg d-flex">
          <button className="login">
            Войти
          </button>
          <button className="regis">Регистрация</button>
        </div>
      </header>
      <div className="content d-flex flex-column">
        <h1>Учебный портал ТИТАН</h1>
        <p>Здесь вы можете изучать новые материалы и <br />
        проходить тесты для повышения квалификации</p>
      </div>
      <div>
        <button className="butTest">
          Пройти тестирование
        </button>
      </div>
    </div>
    </section>
    
    <section className="section-2">
      <div className="wrapper-2">
        <h2>Добро пожаловать на наш <span>учебный портал</span></h2>
        <p>Здесь вы можете изучать новые материалы и проходить <br/>
        тесты для повышения квалификации</p>

        <div className="d-flex">
          {arrCardCourse.map((obj) =>(
            <CardCourse 
              title = {obj.title}
              topicCourse = {obj.topicCourse}
              imgUrl = {obj.imgUrl}
            />
          ))}
        </div>

        <div className="cards-btn">
            <button className="all-courses-btn">Все материалы</button>
        </div>
      </div>
    </section>

    <section className='section-3'>
      <div className='wrapper-3'>
        <h2>Тестируйте свои навыки и <span>повышайте квалификацию</span></h2>
        <p>Здесь вы можете просмотреть тесты, в которых вам не удалось достичь <br/>
          необходимого результата. Используйте эту возможность для анализа своих <br/>
          знаний и улучшения навыков. Проведите повторное изучение материалов и <br/>
          не стесняйтесь проходить тесты снова - ваша цель близка, и каждая <br/>
          попытка приближает к успеху.
        </p>

        <div className="d-flex">
          {arrCardTest.map((obj) => (
            <CardTest 
              title = {obj.title}
              description = {obj.description}
              imgUrl = {obj.imgUrl}
            />
          ))}
        </div>

        <div className='test-btn'>
          <button>Все тесты</button>
        </div>
      </div>
    </section>
    <section className='section-4'>
      <div className='wrapper-4'>
        <div className="logo">
          <img width = {305} height = {108} src="/img/logo.png" alt="Логотип компании ТИТАН"/>
        </div>

        <nav className='nav-links'>
          <a href='#' className='nav-link active'>Основной сайт</a>
          <a href='#'>Тестирования</a>
          <a href='#'>Мои результаты</a>
          <a href='#'>Администартору</a>
        </nav>
      </div>
    </section>
    </div>
    
  );
}

export default App;
