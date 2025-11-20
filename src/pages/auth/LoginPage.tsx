import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';


const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/app/checklist');
        } catch (err: any) {
            console.error(err);
            setError('Неверный email или пароль');
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '24px', maxWidth: 400, margin: '0 auto' }}>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </label>

                <label>
                    Пароль
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </label>

                {error && <div style={{ color: 'red' }}>{error}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Вхожу...' : 'Войти'}
                </button>
            </form>

            <p style={{ marginTop: 16 }}>
                Нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
            </p>
        </div>
    );
};

export default LoginPage;
