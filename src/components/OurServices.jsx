import servicesFon from '../assets/servicesFon.png';
import womanImage from '../assets/womanImage.png'
import manImage from '../assets/manImage.png'

export default function OurServices() {
    return (
        <div style={{ background: `url(${servicesFon})`, backgroundSize: 'cover' }}>
            <div className='max-w-6xl mx-auto py-28 text-white space-y-24 px-8' id='services'>
                <div style={{
                    fontSize: '60px',
                    fontWeight: '700',
                    lineHeight: '60px'
                }} >
                    Наши услуги
                </div>

                <div className='flex flex-col items-center space-x-0 lg:flex-row space-y-14 lg:space-y-0 lg:space-x-8'>
                    <div className='pl-8 pr-24 py-8 relative' style={{
                        background: '#959595',
                        fontSize: '20px',
                        fontWeight: '700',
                        lineHeight: '30px',
                        maxWidth: '560px',
                        zIndex: '0'

                    }}>
                        <div style={{ background: '#00000082', height: '382px' }} className="px-4 py-8">
                            Наша команда предоставляет консультации по ключевым аспектам развития стартапа, включая бизнес-стратегию, разработку продукта, маркетинговые стратегии и привлечение инвестиций.
                        </div>
                        <img src={womanImage} alt="" style={{ position: 'absolute', right: '0px', bottom: '0px', zIndex: '-1' }} />
                    </div>

                    <div className='pl-8 pr-24 py-8 relative' style={{
                        background: '#959595',
                        fontSize: '20px',
                        fontWeight: '700',
                        lineHeight: '30px',
                        maxWidth: '560px',
                        zIndex: '0',
                    }}>
                        <div style={{ background: '#00000082', height: '382px' }} className="px-4 py-8">
                            Мы визуализируем наш процесс сотрудничества с клиентами через иллюстрации, демонстрирующие наши успешные кейсы и достижения.</div>
                        <img src={manImage} alt="" style={{ position: 'absolute', right: '0px', bottom: '0px', zIndex: '-1' }} />
                    </div>
                </div>
            </div>
        </div >
    );
}
