import './AllMaterials.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';

const cardMaterial = [
    {
        title: 'ОСНОВЫ НЕФТЕХИМИИ',
        shortDesc: 'Краткое описание: Данный курс охватывает базовые принципы нефтехимии, включая процесс добычи и переработки нефти. Подробно разбираются технологии и оборудование, используемые на всех этапах.',
        longDesc: 'Этот курс представляет собой комплексное введение в мир нефтехимии, охватывающее все ключевые аспекты данной области. Он начинается с обсуждения происхождения нефти и природного газа, а затем подробно анализирует процессы их добычи и переработки. Особое внимание уделяется различным методам бурения и транспортировки углеводородного сырья, а также этапам переработки на нефтехимических заводах.',
        fileType: 'Видео',

    },
    {
        title: 'БЕЗОПАСНОСТЬ НА ПРОИЗВОДСТВЕ',
        shortDesc: 'Краткое описание: Данный курс охватывает базовые принципы нефтехимии, включая процесс извлечения и переработки нефти.',
        longDesc: `В данном учебном материале акцент делается на безопасность труда в нефтехимической отрасли, которая имеет свои специфические риски и требования. Курс охватывает основные опасности, связанные с работой с химическими веществами, включая взрывы, химическое загрязнение и связанные с ними болезни. Слушатели изучат основные меры предосторожности, которые помогают предотвратить несчастные случаи, а также узнают, как правильно реагировать в экстренных ситуациях.
Обучение включает информацию о правилах личной безопасности, использовании средств индивидуальной защиты и организации безопасных рабочих мест.Особое внимание уделяется методам оказания первой помощи при разных видах травм, что является неотъемлемой частью безопасности на производстве.Этот материал поможет работникам лучше понимать свои обязанности и повысить уровень безопасности на нефтехимических объектах.`,
        fileType: 'PDF',

    },
    {
        title: 'СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПЕРЕРАБОТКИ НЕФТИ',
        shortDesc: 'Краткое описание: Этот материал знакомит сотрудников с последними достижениями в области переработки нефти, включая каталитические и крекинговые процессы.',
        longDesc: `Этот ресурс посвящен инновационным технологиям, применяемым в переработке нефти в современном мире. Он охватывает передовые методы, такие как каталитическая и термическая переработка, а также новые экологически чистые технологии, которые помогают снизить негативное воздействие на окружающую среду. Участники обучающего курса смогут ознакомиться с последними достижениями в области управления производственными процессами, а также с примерами успешных проектов, реализованных в отрасли.
 Включенные примеры внедрения успешных практик помогут сотрудникам понять, как новые технологии могут повысить производительность и эффективность работы, а также улучшить экологии. Этот материал будет полезен для инженеров, технологов и всех, кто заинтересован в современных трендах нефтехимической переработки.`,
        fileType: 'Видео',

    }
];

function AllMaterials() {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const currCardMaterial = cardMaterial[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev == 0 ? cardMaterial.length - 1: prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev == cardMaterial.length - 1 ? 0 : prev + 1));
    }

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
                            <button className='slider-arrow prev' onClick={handlePrev}>
                                <img src="/img/arrow-l.png" alt="Предыдущий" />
                            </button>
                            <div className='material-card'>
                                <div className='card-content'>
                                    <h3>{currCardMaterial.title}</h3>
                                    <p>{currCardMaterial.shortDesc}</p>
                                    <div className='file-type'>Тип файла: {currCardMaterial.fileType}</div>
                                    <div className='card-footer'>
                                        <button className='study-btn'>
                                            <span>Изучить</span>
                                            <img src="/img/play.png" alt="Изучить" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className='slider-arrow next' onClick={handleNext}>
                                <img src="/img/arrow-r.png" alt="Следующий" />
                            </button>
                        </div>
                        <div className="slider-dots">
                            {cardMaterial.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                > 

                                </div> 
                            
                            ))}
                        </div>
                    </div>
                </div>
                <div className='materials-right'>
                    <div className='course-details'>
                        <p>
                            {currCardMaterial.longDesc}   
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AllMaterials;