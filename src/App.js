import './index.scss';


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
          <div className="card">
            <h3>Новый курс</h3>
            <p>Основы упраления проектами</p>
            <img width = {363} height = {249.12} src="/img/women-1.png" alt="Илюстрация курса"/>
            <button>Перейти</button>
          </div>
          <div className="card">
            <h3>Новый курс</h3>
            <p>Основы упраления проектами</p>
            <img width = {363} height = {249.12} src="/img/women-1.png" alt="Илюстрация курса"/>
            <button>Перейти</button>
          </div>
          <div className="card">
            <h3>Новый курс</h3>
            <p>Основы упраления проектами</p>
            <img width = {363} height = {249.12} src="/img/women-1.png" alt="Илюстрация курса"/>
            <button>Перейти</button>
          </div>
          <div className="card">
            <h3>Новый курс</h3>
            <p>Основы упраления проектами</p>
            <img width = {363} height = {249.12} src="/img/women-1.png" alt="Илюстрация курса"/>
            <button>Перейти</button>
          </div>
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
          <div className='card-test'> 
            <h3>Тест: Название теста</h3>
            <img width = {496} height = {190} src = "/img/card-test.jpg" alt = "Пример теста"/>
            <p>Описание теста в две-три строкиОписание теста в две-три <br/>
            строкиОписание теста в две-три строкиОписание теста в <br/>
            две-три строки</p>
            <button>Пройти тест</button>
          </div>
          <div className='card-test'> 
            <h3>Тест: Название теста</h3>
            <img width = {496} height = {190} src = "/img/card-test.jpg" alt = "Пример теста"/>
            <p>Описание теста в две-три строкиОписание теста в две-три <br/>
            строкиОписание теста в две-три строкиОписание теста в <br/>
            две-три строки</p>
            <button>Пройти тест</button>
          </div>
          <div className='card-test'> 
            <h3>Тест: Название теста</h3>
            <img width = {496} height = {190} src = "/img/card-test.jpg" alt = "Пример теста"/>
            <p>Описание теста в две-три строкиОписание теста в две-три <br/>
            строкиОписание теста в две-три строкиОписание теста в <br/>
            две-три строки</p>
            <button>Пройти тест</button>
          </div>
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
