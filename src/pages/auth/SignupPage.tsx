import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

const SignupPage: React.FC = () => {
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
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/app/checklist');
        } catch (err: any) {
            console.error(err);
            setError(err?.message || 'Ошибка регистрации');
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '24px', maxWidth: 400, margin: '0 auto' }}>
            <h2>Регистрация</h2>
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
                    Пароль (минимум 6 символов)
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength={6}
                        style={{ width: '100%' }}
                    />
                </label>

                {error && <div style={{ color: 'red' }}>{error}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Регистрирую...' : 'Зарегистрироваться'}
                </button>
            </form>

            <p style={{ marginTop: 16 }}>
                Уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        </div>
    );
};

export default SignupPage;
