import './AllMaterials.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function AllMaterials() {
    return (
        <div className="materials-page">
            <header className="header">
                <div className="header-inner">
                    <div className="logo">
                        <Link to='/'>
                            <img width={306} height={100} src="/img/logo2.png" alt="Логотип компании ТИТАН" />
                        </Link>
                    </div>
                    <nav>
                        <ul className="headerCenter">
                            <li>
                                <a href='#' className='header-link'>Тестирования</a>
                            </li>
                            <li>
                                <a href='#' className='header-link'>Мои результаты</a>
                            </li>
                            <li>
                                <a href='#' className='header-link'>Администратору</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <button className="login">Войти</button>
                        <button className="regis">Регистрация</button>
                    </div>
                </div>
            </header>
            <section className='hero'>
                <div className='hero-content'>
                    <h1>
                        Учебные материалы
                    </h1>
                    <p>
                        Здесь вы найдете обширную коллекцию ресурсов для обучения и <br />
                        подготовки к тестированию. Наши материалы разделены на различные <br />
                        категории, включая видеоуроки, статьи, электронные книги и <br />
                        интерактивные задания.
                        <br />
                        <br />
                        Используйте поиск или фильтры, чтобы быстро находить нужные ресурсы.<br />
                        Вы можете приступить к изучению прямо сейчас, нажав на любой из<br />
                        представленных материалов!
                    </p>
                </div>
            </section>
            <section className='materials-section'>
                <div className='materials-left'>
                    <div className='materials-container'>
                        <h2>Вы можете изучить следующие <span>материалы</span></h2>
                        <div className='materials-slider'>
                            <button className='slider-arrow prev'>
                                <img src="/img/arrow-l.png" alt="Предыдущий" />
                            </button>
                            <div className='material-card'>
                                <div className='card-content'>
                                    <h3>ОСНОВЫ НЕФТЕХИМИИ</h3>
                                    <p>Краткое описание: Данный курс охватывает базовые принципы нефтехимии, включая процессы добычи и переработки нефти, основные химические реакции и оборудование, используемые на всех этапах.</p>
                                    <div className='file-type'>Тип файла: Видео</div>
                                    <div className='card-footer'>
                                        <button className='study-btn'>
                                            <span>Изучить</span>
                                            <img src="/img/play.png" alt="Изучить" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className='slider-arrow next'>
                                <img src="/img/arrow-r.png" alt="Следующий" />
                            </button>
                        </div>
                        <div className="slider-dots">
                            <div className="dot active"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
                <div className='materials-right'>
                    <div className='course-details'>
                        <p>
                            Этот курс представляет собой комплексное введение в мир нефтехимии, охватывающее все ключевые аспекты данной области. Он начинается с обсуждения происхождения нефти и природного газа, а затем подробно анализирует процессы их добычи и переработки. Особое внимание уделяется различным методам бурения и транспортировки углеводородного сырья, а также этапам переработки на нефтехимических заводах.
                        </p>
                        <p>
                            Участники курса смогут ознакомиться с современным оборудованием, применяемым в этой отрасли, и изучить основные химические реакции, которые происходят в процессе переработки. Обучающие материалы, такие как анимации и схемы, упрощают понимание сложных процессов. Этот обучающий ресурс предназначен для новичков и всех, кто хочет получить фундаментальные знания о нефтехимической индустрии.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AllMaterials;