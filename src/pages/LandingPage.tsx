import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div style={{ padding: '24px', maxWidth: 800, margin: '0 auto' }}>
            <h1>КУРЬЕРСКАЯ ПАРТНЁРКА</h1>
            <p>
                Пошаговый портал для тех, кто хочет работать курьером в Израиле:
                права, скутер, страховка, заявки в компании, экипировка и реальные
                советы из практики.
            </p>
            <p>Всё бесплатно. Заработок идёт с партнёрских сервисов и консультаций.</p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
                <Link to="/signup">Зарегистрироваться</Link>
                <Link to="/login">У меня уже есть аккаунт</Link>
            </div>
        </div>
    );
};

export default LandingPage;
