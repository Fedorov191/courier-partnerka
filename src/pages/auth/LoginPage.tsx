// src/pages/auth/LoginPage.tsx
import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/app/checklist");
        } catch (err: unknown) {
            console.error(err);
            setError("Не удалось войти. Проверьте email и пароль.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f3f4f6",
                color: "#111827",
                display: "flex",
                flexDirection: "column",
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
        >
            <header
                style={{
                    borderBottom: "1px solid #e5e7eb",
                    padding: "12px 24px",
                    backgroundColor: "#ffffff"
                }}
            >
                <div
                    style={{
                        maxWidth: 960,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            textDecoration: "none",
                            color: "#111827"
                        }}
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "999px",
                                background:
                                    "linear-gradient(135deg, #22c55e, #0ea5e9)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#ffffff"
                            }}
                        >
                            KS
                        </div>
                        <span style={{ fontWeight: 600 }}>Курьерский Старт</span>
                    </Link>

                    <Link
                        to="/signup"
                        style={{
                            fontSize: 14,
                            color: "#4b5563",
                            textDecoration: "none"
                        }}
                    >
                        Нет аккаунта? Регистрация
                    </Link>
                </div>
            </header>

            <main
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: 400,
                        borderRadius: 16,
                        border: "1px solid #e5e7eb",
                        backgroundColor: "#ffffff",
                        padding: 24,
                        boxShadow: "0 18px 45px rgba(15,23,42,0.06)"
                    }}
                >
                    <h1
                        style={{
                            fontSize: 22,
                            marginBottom: 8
                        }}
                    >
                        Вход в личный кабинет
                    </h1>
                    <p
                        style={{
                            fontSize: 14,
                            color: "#4b5563",
                            marginBottom: 20
                        }}
                    >
                        Введите email и пароль, чтобы открыть свой чек-лист курьера.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        style={{ display: "flex", flexDirection: "column", gap: 12 }}
                    >
                        <label style={{ fontSize: 14 }}>
                            Email
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    marginTop: 4,
                                    width: "100%",
                                    padding: "8px 10px",
                                    borderRadius: 8,
                                    border: "1px solid #d1d5db",
                                    background: "#ffffff",
                                    color: "#111827",
                                    fontSize: 14
                                }}
                            />
                        </label>

                        <label style={{ fontSize: 14 }}>
                            Пароль
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    marginTop: 4,
                                    width: "100%",
                                    padding: "8px 10px",
                                    borderRadius: 8,
                                    border: "1px solid #d1d5db",
                                    background: "#ffffff",
                                    color: "#111827",
                                    fontSize: 14
                                }}
                            />
                        </label>

                        {error && (
                            <div
                                style={{
                                    marginTop: 4,
                                    fontSize: 13,
                                    color: "#b91c1c"
                                }}
                            >
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                marginTop: 8,
                                padding: "10px 16px",
                                borderRadius: 999,
                                border: "none",
                                background:
                                    "linear-gradient(135deg, #22c55e, #0ea5e9)",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: 14,
                                cursor: loading ? "default" : "pointer",
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            {loading ? "Входим..." : "Войти"}
                        </button>
                    </form>

                    <div
                        style={{
                            marginTop: 12,
                            fontSize: 13,
                            color: "#4b5563"
                        }}
                    >
                        Нет аккаунта?{" "}
                        <Link
                            to="/signup"
                            style={{ color: "#0a63ff", textDecoration: "none" }}
                        >
                            Зарегистрироваться
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
