function Footer() {
    return (
        <section className='section-4'>
                <div className='wrapper-4'>
                    <div className="logo">
                        <img width={305} height={108} src="/img/logo.png" alt="Логотип компании ТИТАН" />
                    </div>

                    <nav className='nav-links'>
                        <a href='#' className='nav-link active'>Основной сайт</a>
                        <a href='#'>Тестирования</a>
                        <a href='#'>Мои результаты</a>
                        <a href='#'>Администартору</a>
                    </nav>
                </div>
            </section>
    );
}

export default Footer;