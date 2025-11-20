import { useParams, Link } from 'react-router-dom';

const StepPage: React.FC = () => {
    const { stepId } = useParams<{ stepId: string }>();

    return (
        <div style={{ padding: '24px' }}>
            <p>
                <Link to="/app/checklist">← Назад к чек-листу</Link>
            </p>
            <h2>Шаг: {stepId}</h2>
            <p>
                Здесь позже будет нормальный контент: описание шага,
                инструкции и партнёрские ссылки.
            </p>
        </div>
    );
};

export default StepPage;
