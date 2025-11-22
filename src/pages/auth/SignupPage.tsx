import React, { useState } from "react";
import type { FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

const SignupPage: React.FC = () => {
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
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/app/checklist");
        } catch (err) {
            console.error(err);
            setError("Не удалось создать аккаунт. Возможно, email уже используется.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#020617",
                color: "#f9fafb",
                display: "flex",
                flexDirection: "column",
                fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
        >
            {/* Шапка */}
            <header
                style={{
                    borderBottom: "1px solid #111827",
                    padding: "12px 24px"
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
                            color: "#f9fafb"
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
                                fontWeight: 700
                            }}
                        >
                            KS
                        </div>
                        <span style={{ fontWeight: 600 }}>Курьерский Старт</span>
                    </Link>

                    <Link
                        to="/login"
                        style={{
                            fontSize: 14,
                            color: "#e5e7eb",
                            textDecoration: "none"
                        }}
                    >
                        Уже есть аккаунт? Войти
                    </Link>
                </div>
            </header>

            {/* Контент */}
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
                        border: "1px solid #111827",
                        background:
                            "radial-gradient(circle at top, rgba(14,165,233,0.22), transparent 55%), #020617",
                        padding: 24,
                        boxShadow: "0 18px 45px rgba(0,0,0,0.55)"
                    }}
                >
                    <h1
                        style={{
                            fontSize: 22,
                            marginBottom: 8
                        }}
                    >
                        Регистрация
                    </h1>
                    <p
                        style={{
                            fontSize: 14,
                            opacity: 0.8,
                            marginBottom: 20
                        }}
                    >
                        Создайте аккаунт, чтобы сохранить ваш чек-лист курьера и
                        прогресс по шагам.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
                                    border: "1px solid #1f2937",
                                    background: "#020617",
                                    color: "#f9fafb",
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
                                    border: "1px solid #1f2937",
                                    background: "#020617",
                                    color: "#f9fafb",
                                    fontSize: 14
                                }}
                            />
                        </label>

                        {error && (
                            <div
                                style={{
                                    marginTop: 4,
                                    fontSize: 13,
                                    color: "#f97373"
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
                                color: "#020617",
                                fontWeight: 700,
                                fontSize: 14,
                                cursor: loading ? "default" : "pointer",
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            {loading ? "Создаём аккаунт..." : "Зарегистрироваться"}
                        </button>
                    </form>

                    <div
                        style={{
                            marginTop: 12,
                            fontSize: 13,
                            opacity: 0.8
                        }}
                    >
                        Уже есть аккаунт?{" "}
                        <Link
                            to="/login"
                            style={{ color: "#4ea1ff", textDecoration: "none" }}
                        >
                            Войти
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignupPage;
