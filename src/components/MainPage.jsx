import mainPageImage from '../assets/mainPageFonImage.png'
import lightning from '../assets/lightning.png'

import Nav from './Nav'

export default function MainPage() {
    return (
        <div className="" style={{ backgroundImage: `url(${mainPageImage})`, minHeight: '100vh', backgroundSize: 'cover' }}>
            <div className='pt-8 mb-36'>
                <Nav />
            </div>
            <div className='max-w-6xl mx-auto space-y-10 px-8   '>
                <div style={{
                    fontWeight: '700',
                    fontSize: '30px',
                    lineHeight: '40px',
                    color: '#FFFFFF42',
                    maxWidth: '400px'
                }} >
                    Узнайте, как мы помогаем стартапам достичь успеха
                </div>
                <div
                    style={{
                        fontWeight: '700',
                        fontSize: '80px',
                        lineHeight: '90px',
                        color: '#FFFFFF',
                        maxWidth: '590px'
                    }}>
                    Откройте путь к успеху
                </div>
                <button style={{ background: '#025699' }} className="py-3 px-12 text-white text-3
                xl font-bold">
                    Получить инфо
                </button>
            </div>

            <div className='flex justify-end max-w-6xl mx-auto relative pt-32 px-8'>
                <div className='sm:flex hidden space-x-4' style={{ position: 'absolute', bottom: '-100px' }}>
                    <div style={{ background: '#025699', width: '200px' }} className="p-4 space-y-4 flex flex-col items-start" >
                        <img src={lightning} alt="" />
                        <span style={{
                            fontSize: '20px',
                            color: '#FFFFFF78'
                        }}>
                            Консультации по информационным технологиям
                        </span>
                    </div>
                    <div style={{ background: '#025699', width: '200px' }} className="p-4 space-y-4 flex flex-col items-start" >
                        <img src={lightning} alt="" />
                        <span style={{
                            fontSize: '20px',
                            color: '#FFFFFF78'
                        }}>
                            Консультации по информационным технологиям
                        </span>
                    </div>
                    <div style={{ background: '#025699', width: '200px' }} className="p-4 space-y-4 flex flex-col items-start" >
                        <img src={lightning} alt="" />
                        <span style={{
                            fontSize: '20px',
                            color: '#FFFFFF78'
                        }}>
                            Консультации по информационным технологиям
                        </span>
                    </div>
                </div>
            </div>
            <div className='py-32 bg-white'>
                <div className='max-w-6xl mx-auto flex flex-col space-y-12 pt-12 items-center text-center'>
                    <span
                        style={{
                            fontSize: '60px',
                            fontWeight: '700',
                            lineHeight: '60px'
                        }}
                        className="max-w-3xl"
                    >
                        Более чем <span className='text-blue-700'>10+</span> стартапов
                    </span>
                    <span style={{
                        fontSize: '25px',
                        fontWeight: '700',
                        lineHeight: '35px',
                        color: '#00000038'
                    }}
                        className="max-w-2xl"
                    >
                        Мы помогли десяткам стартапов достичь финансовой устойчивости и привлечь инвестиции
                    </span>
                </div>
            </div>
        </div>
    );
}
