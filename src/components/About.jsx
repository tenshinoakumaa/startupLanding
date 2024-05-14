import image2 from '../assets/image2.png'
export default function About() {
    return <>
        <div className='mb-28' style={{ background: '#025699' }}>
            <div className="max-w-6xl mx-auto flex sm:flex-row  flex-col space-x-12 px-12 py-4">
                <img src={image2} alt="" className='object-cover sm:w-1/2' />
                <div className='py-12 text-white flex flex-col space-y-12'>
                    <div className='flex flex-col space-y-6'>
                        <span
                            style={{
                                fontSize: window.innerWidth>=1024 ? '50px' : '30px',
                                fontWeight: '700',
                                lineHeight: '40px'
                            }}>
                            InnovativeHub
                        </span>
                        <span style={{
                            fontSize: '30px',
                            fontWeight: '400',
                            lineHeight: '40px'
                        }}>
                            это инновационная платформа, помогающая стартапам добиться роста и успеха
                        </span>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:space-y-0 space-y-8 items-start lg:justify-between w-full'>
                        <div className='flex flex-col space-y-4 mb-4'>
                            <span
                                style={{
                                    fontSize: '50px',
                                    fontWeight: '700',
                                    lineHeight: '40px'
                                }}>
                                750
                            </span>
                            <span style={{
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '30px'
                            }}>
                                Проект завершен
                            </span>
                        </div>
                        <div className='flex flex-col space-y-4 items-start lg:items-end'>
                            <span
                                style={{
                                    fontSize: '50px',
                                    fontWeight: '700',
                                    lineHeight: '40px'
                                }}>
                                450
                            </span>
                            <span className='text-start lg:text-end' style={{
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '30px',
                            }}>
                                Деловые партнеры
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:space-y-0 space-y-8 items-start lg:justify-between w-full'>
                        <div className='flex flex-col space-y-4'>
                            <span
                                style={{
                                    fontSize: '50px',
                                    fontWeight: '700',
                                    lineHeight: '40px'
                                }}>
                                650
                            </span>
                            <span style={{
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '30px'
                            }}>
                                Довольных клиентов
                            </span>
                        </div>
                        <div className='flex flex-col space-y-4 items-start lg:items-end'>
                            <span
                                style={{
                                    fontSize: '50px',
                                    fontWeight: '700',
                                    lineHeight: '40px'
                                }}>
                                429
                            </span>
                            <span style={{
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '30px',
                                textAlign: 'end'
                            }}>
                                ИТ-консультант
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}