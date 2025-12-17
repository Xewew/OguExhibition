import { forwardRef } from 'react';

import './footer.scss';
import IcoVK from '../../assets/image/vk.png'
import IcoTG from '../../assets/image/telegram.png'
import IcoInst from '../../assets/image/inst.png'
import IcoYT from '../../assets/image/youtube.png'

const Footer = forwardRef((props, ref) => {
    return (
        <footer className='footer' ref={ref}>
            <div className="footer__inner">
                <div className="footer__about-box">
                    <div className="footer__about">
                        <h3 className="footer__title">о выставке</h3>
                        <p className="footer__description">
                            Юбилейный арт-проект к 30-летию кафедры дизайна ОГУ. Современный взгляд. Новые формы.
                        </p>
                    </div>
                    <div className="footer__about">
                        <h3 className="footer__title">часы работы</h3>
                        <p className="footer__description">
                            <span>10:00 - 18:00</span>
                            <ul>
                                <li>Выходные:</li>
                                <li>Понедельник</li>
                                <li>Вторник</li>
                            </ul>
                        </p>
                    </div>
                    <div className="footer__about">
                        <h3 className="footer__title">где мы находимся</h3>
                        <p className="footer__description">
                            ул. Володарского, д. 13, Оренбург, 460000, Россия
                        </p>
                        <a href='mailto:logout.expo@gmail.com' className='footer__mail'>logout.expo@gmail.com</a>
                    </div>
                <div className="footer__about">
                    <h3 className="footer__title title-ico">стать участником</h3>
                    <input maxlength="29" type="mail" placeholder='Email' className="footer__input" />
                    <button className='footer__btn'></button>
                    <div className="icoSocial">
                    <a href="#"><img src={IcoVK} alt="" className="footer__ico" /></a>
                    <a href="#"><img src={IcoTG} alt="" className="footer__ico" /></a>
                    <a href="#"><img src={IcoInst} alt="" className="footer__ico" /></a>
                    <a href="#"><img src={IcoYT} alt="" className="footer__ico" /></a>
                    </div>
                </div>
                </div>

                <div className="footer__low-text">
                    <p className="footer-text">
                        Все права на любые материалы, опубликованные на сайте, защищены в соответствии с законодательством Российской Федерации, включая Гражданский кодекс РФ (часть четвертая), а также международными соглашениями в области интеллектуальной собственности. Любое использование текстовых, фото-, аудио- и видеоматериалов возможно только с согласия правообладателя.
                    </p>
                </div>
            </div>
            <div className="footer__vertical-text">
                    <span>Выпадение из системы</span>
            </div>
        </footer>
    )
})

export default Footer