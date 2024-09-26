import mainPageImage from '../assets/mainPageFonImage.png'

import telegram from '../assets/telegram.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Modal from 'react-modal';
import { styled } from "styled-components"
import { useState } from "react";

const ModalContent = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding: 1rem; 
`;

export default function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return <>
        <div style={{ backgroundImage: `url(${mainPageImage})`, backgroundSize: 'cover' }} className="lg:hidden bg-black py-28 px-4 sm:px-28" id="footer">
            <div className='flex justify-between mb-12 space-y-4 text-white w-full'>
                <span style={{
                    fontSize: '25px',
                    fontWeight: '600',
                    lineHeight: '36.13px'
                }}>
                    InnovateHub
                </span>
                <div className='flex space-x-4'>
                    <img src={telegram} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="max-w-6xl space-x-12 text-white items-start flex justify-between">

                <div className='flex flex-col space-y-6'>

                    <span style={{
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '25px'
                    }}>
                        Меню сайта
                    </span>
                    <ul style={{
                        fontSize: '25px',
                        fontWeight: '400',
                        lineHeight: '36.13px',
                        color: '#FFFFFF99'
                    }} className="space-y-4">
                        <li>
                            О нас
                        </li>
                        <li>
                            Почему мы
                        </li>
                        <li>
                            Наши услуги
                        </li>
                        <li>
                            Отзывы
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-6'>
                    <span style={{
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '15px'
                    }}>
                        Контакты
                    </span>
                    <ul style={{
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '36.13px',
                        color: '#FFFFFF99'
                    }} className="space-y-4">
                        <li>
                            Телефон: <br />+123456789
                        </li>
                        <li>
                            Email: <br />info@innovatehub.com
                        </li>

                    </ul>
                </div>
            </div>
            <div className='mx-auto mt-[40px] max-w-[470px] bg-white flex flex-col items-center px-[25px] py-[40px] space-y-[32px]'>
                    <span className='text-[#025699]' style={{
                        fontFamily: 'Jost',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '57.8px',
                        textAlign: 'left',
                    }}>
                        Оставьте заявку
                    </span>
                    <input type="text" placeholder='Имя' className='w-full rounded-[10px] shadow-2xl bg-[#5088B5] text-white text-[24px] placeholder-white p-[17px]' />
                    <input type="text" placeholder='Почта' className='bg-[#5088B5] w-full rounded-[10px] shadow-2xl text-white text-[24px] placeholder-white p-[17px]' />
                    <input type="text" placeholder='+7 (000)000 00 00' className='bg-[#5088B5] w-full rounded-[10px] shadow-2xl text-white text-[24px] placeholder-white p-[17px]' />
                    <div className='w-full bg-[#025699] text-[35px] text-white px-[48px] text-center py-[17px]'>Отправить заявку</div>
                    <div className='text-black'>
                        Оставляя заявку Вы даете согласие на информационную рассылку ваших данных
                    </div>
                </div>
            <div style={{
                fontSize: '25px',
                fontWeight: '500',
                lineHeight: '36.13px',
            }} className='text-center text-white pt-28'>
                © 2024 . Политика конфиденциальности
            </div>
        </div>
        <div style={{ backgroundImage: `url(${mainPageImage})`, backgroundSize: 'cover' }} className="hidden lg:block bg-black py-28 px-28">
            <div className="max-w-6xl text-white flex justify-between">
                <div className='max-w-[470px] bg-white flex flex-col items-center px-[25px] py-[40px] space-y-[32px]'>
                    <span className='text-[#025699]' style={{
                        fontFamily: 'Jost',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '57.8px',
                        textAlign: 'left',
                    }}>
                        Оставьте заявку
                    </span>
                    <input type="text" placeholder='Имя' className='w-full rounded-[10px] shadow-2xl bg-[#5088B5] text-white text-[24px] placeholder-white p-[17px]' />
                    <input type="text" placeholder='Почта' className='bg-[#5088B5] w-full rounded-[10px] shadow-2xl text-white text-[24px] placeholder-white p-[17px]' />
                    <input type="text" placeholder='+7 (000)000 00 00' className='bg-[#5088B5] w-full rounded-[10px] shadow-2xl text-white text-[24px] placeholder-white p-[17px]' />
                    <div className='w-full bg-[#025699] text-[35px] text-white px-[48px] text-center py-[17px]'>Отправить заявку</div>
                    <div className='text-black'>
                        Оставляя заявку Вы даете согласие на информационную рассылку ваших данных
                    </div>
                </div>
                <div className='flex flex-col space-y-6'>
                    <span style={{
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '30px'
                    }}>
                        Меню сайта
                    </span>
                    <ul style={{
                        fontSize: '25px',
                        fontWeight: '400',
                        lineHeight: '36.13px',
                        color: '#FFFFFF99'
                    }} className="space-y-4">
                        <li>
                            О нас
                        </li>
                        <li>
                            Почему мы
                        </li>
                        <li>
                            Наши услуги
                        </li>
                        <li>
                            Отзывы
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-6'>
                    <span style={{
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '15px'
                    }}>
                        Контакты
                    </span>
                    <ul style={{
                        fontSize: '25px',
                        fontWeight: '400',
                        lineHeight: '36.13px',
                        color: '#FFFFFF99'
                    }} className="space-y-4">
                        <li>
                            Телефон: +123456789
                        </li>
                        <li>
                            Email: info@innovatehub.com
                        </li>

                    </ul>
                    <div className='flex flex-col space-y-4'>
                        <span style={{
                            fontSize: '25px',
                            fontWeight: '600',
                            lineHeight: '36.13px'
                        }}>
                            InnovateHub
                        </span>
                        <div className='flex space-x-4'>
                            <img src={telegram} alt="" />
                            <img src={instagram} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                fontSize: '25px',
                fontWeight: '500',
                lineHeight: '36.13px',
            }} className='text-center text-white pt-28'>
                <span onClick={openModal}>© 2024 . Политика конфиденциальности</span>
            </div>
        </div >

        <Modal style={{

        }} isOpen={modalIsOpen} onRequestClose={closeModal} className="" >
            <ModalContent>
                <div className="p-4 text-xl">
                    Конфиденциальность клиентов - наш приоритет. Наша политика конфиденциальности разработана для защиты вашей личной информации. На нашем лендинге мы не собираем никаких персональных данных без вашего согласия. Мы ценим вашу конфиденциальность и стремимся обеспечить безопасную среду для посещения нашего сайта. Ниже приведены основные принципы нашей политики конфиденциальности:

                    <br />1. Сбор информации: Мы не собираем никаких персональных данных о посетителях нашего лендинга без их явного согласия.

                    <br />2. Использование информации: Любая предоставленная вами информация используется исключительно для ответа на ваши запросы и обратной связи. Мы не раскрываем, продаем или передаем вашу личную информацию третьим лицам.

                    <br />3. Контактные данные: На нашем лендинге вы можете найти контактную информацию для связи с нами. Мы гарантируем безопасность и конфиденциальность любой информации, переданной через эти каналы связи.

                    <br />4. Безопасность: Мы принимаем меры безопасности для защиты вашей личной информации от несанкционированного доступа или использования.

                    <br />5. Изменения в политике конфиденциальности: Мы оставляем за собой право вносить изменения в нашу политику конфиденциальности. Любые изменения будут опубликованы на этой странице.

                    <br />Если у вас возникли вопросы или предложения относительно нашей политики конфиденциальности, пожалуйста, свяжитесь с нами, используя контактную информацию, указанную на нашем лендинге.

                </div>
            </ModalContent>
            <div className="text-center">
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </Modal>
    </>
}