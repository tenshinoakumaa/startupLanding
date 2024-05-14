import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'

export default function Reviews() {
    return <>
        <div className="max-w-6xl mx-auto py-28 px-8">
            <div style={{
                color: '#025699'
            }} id="reviews" >
                < span style={{
                    fontSize: '60px',
                    fontWeight: '700',
                    lineHeight: '60px'
                }}>
                    Отзывы наших клиентов
                </span>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between space-x-12 max-w-5xl mx-auto pt-28 w-full'>
                <img src={client1} alt="" />
                <div className='flex flex-col items-start space-y-6'>
                    <span style={{
                        fontSize: '40px',
                        fontWeight: '600',
                        lineHeight: '60px'
                    }}>
                        Михаил Сидоров
                    </span>
                    <span style={{
                        fontSize: '25px',
                        fontWeight: '600',
                        lineHeight: '35px'
                    }}>
                        Спасибо InnovateHub за профессиональную помощь! Благодаря их экспертному сопровождению мы смогли успешно запустить наш продукт на рынок и получить первые заказы.
                    </span>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between space-x-12 max-w-5xl mx-auto pt-28 w-full'>
                <img src={client2} alt="" />
                <div className='flex flex-col items-start space-y-6'>
                    <span style={{
                        fontSize: '40px',
                        fontWeight: '600',
                        lineHeight: '60px'
                    }}>
                        Анна Иванова
                    </span>
                    <span style={{
                        fontSize: '25px',
                        fontWeight: '600',
                        lineHeight: '35px'
                    }}>
                        Невероятный опыт работы с InnovateHub! Они помогли нам разработать эффективную стратегию маркетинга и привлечь новых клиентов. Очень довольны результатами!                    </span>
                </div>
            </div>
        </div>
    </>
}