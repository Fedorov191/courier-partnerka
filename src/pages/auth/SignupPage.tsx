// src/pages/auth/SignupPage.tsx
import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { db } from "../../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wantsEmails, setWantsEmails] = useState(true); // <- согласие на рассылки
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // 1) создаём пользователя в Firebase Auth
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            const user = cred.user;

            // 2) сохраняем профиль в Firestore: email, дата, согласие на рассылки
            if (user) {
                const userRef = doc(db, "users", user.uid);
                await setDoc(
                    userRef,
                    {
                        email: user.email,
                        createdAt: serverTimestamp(),
                        notifications: wantsEmails, // true / false
                    },
                    { merge: true }
                );
            }

            // 3) отправляем на чек-лист
            navigate("/app/checklist");
        } catch (err: unknown) {
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
                        to="/login"
                        style={{
                            fontSize: 14,
                            color: "#4b5563",
                            textDecoration: "none"
                        }}
                    >
                        Уже есть аккаунт? Войти
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
                        Регистрация
                    </h1>
                    <p
                        style={{
                            fontSize: 14,
                            color: "#4b5563",
                            marginBottom: 20
                        }}
                    >
                        Создайте аккаунт, чтобы сохранять свой чек-лист курьера и
                        прогресс по шагам.
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

                        {/* ЧЕКБОКС СОГЛАСИЯ НА РАССЫЛКУ */}
                        <label
                            style={{
                                fontSize: 13,
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 8,
                                marginTop: 4,
                                color: "#4b5563"
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={wantsEmails}
                                onChange={(e) => setWantsEmails(e.target.checked)}
                                style={{ marginTop: 2 }}
                            />
                            <span>
                                Хочу получать на email полезные советы по работе курьером
                                в Израиле и уведомления о новых возможностях и предложениях.
                            </span>
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
                            {loading ? "Создаём аккаунт..." : "Зарегистрироваться"}
                        </button>
                    </form>

                    <div
                        style={{
                            marginTop: 12,
                            fontSize: 13,
                            color: "#4b5563"
                        }}
                    >
                        Уже есть аккаунт?{" "}
                        <Link
                            to="/login"
                            style={{ color: "#0a63ff", textDecoration: "none" }}
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
