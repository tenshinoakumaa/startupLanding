import Ellipse1 from '../assets/Ellipse1.png'
import Ellipse2 from '../assets/Ellipse2.png'
import Ellipse3 from '../assets/Ellipse3.png'

export default function WhyWe() {
    return <>
        <div style={{ background: '#00000012', minHeight: '100vh' }} className="relative py-14 my-28">

            <img src={Ellipse1} alt="" style={{
                position: 'absolute',
                zIndex: '-1',
                right: '0px'
            }} />
            <img src={Ellipse2} alt="" style={{
                position: 'absolute',
                right: '0px',
                zIndex: '-1',
                top: '200px',
            }} />
            <img src={Ellipse3} alt="" style={{
                position: 'absolute',
                right: '0px',
                zIndex: '-1'
            }} />
            <div className='max-w-6xl mx-auto space-y-14 px-12' id="why">
                <div style={{
                    color: '#025699'
                }} >
                    < span style={{
                        fontSize: '60px',
                        fontWeight: '700',
                        lineHeight: '60px'
                    }}>
                        Почему мы?
                    </span>
                </div>
                <div style={{
                    background: '#FFFFFFB5', maxWidth: '750px',
                    fontSize: '25px',
                    fontWeight: '700',
                    lineHeight: '30px',
                    color: '#025699'
                }} className="px-8 sm:px-28 py-12 rounded-full">
                    Мы предоставляем персонализированные решения для каждого стартапа, помогая им выделиться на рынке и достичь роста в конкурентной среде
                </div>

                <div style={{
                    background: '#FFFFFFB5', maxWidth: '750px',
                    fontSize: '25px',
                    fontWeight: '700',
                    lineHeight: '30px',
                    color: '#025699'
                }} className="px-8 sm:px-28 py-12 rounded-full">
                    Мы предоставляем персонализированные решения для каждого стартапа, помогая им выделиться на рынке и достичь роста в конкурентной среде
                </div>

                <div style={{
                    background: '#FFFFFFB5', maxWidth: '750px',
                    fontSize: '25px',
                    fontWeight: '700',
                    lineHeight: '30px',
                    color: '#025699'
                }} className="px-8 sm:px-28 py-12 rounded-full">
                    Мы предоставляем персонализированные решения для каждого стартапа, помогая им выделиться на рынке и достичь роста в конкурентной среде
                </div>
            </div >
        </div>
    </>
}