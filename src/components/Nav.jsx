import Burger from './Burger'
export default function Nav() {
    return <>
        <nav style={{
            fontSize: '25px',
            fontWeight: '450',
            lineHeight: '36.13px'
        }} className="primary-font text-black max-w-6xl mx-auto px-10 py-4 bg-white flex justify-between">
            <div >
                <span>Innovate</span>
                <span className="text-blue-500">Hub</span>
            </div>
            <ul className="lg:flex space-x-6 hidden">
                <li>
                    О нас
                </li>
                <li>
                    <a href="#why">Почему мы</a>
                </li>
                <li>
                    <a href="#services">Наши услуги</a>
                </li>
                <li>
                    <a href="reviews">Отзывы</a>
                </li>
                <li>
                    <a href="#footer">Контакты</a>
                </li>
            </ul>

            {window.innerWidth >= 1024 ? '' : <Burger />}
        </nav>
    </>
}