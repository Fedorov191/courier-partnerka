// src/pages/LandingPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f3f4f6",
                color: "#111827",
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
        >
            {/* Шапка */}
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
                        justifyContent: "space-between",
                        gap: 16
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
                                width: 32,
                                height: 32,
                                borderRadius: "999px",
                                background:
                                    "linear-gradient(135deg, #22c55e, #0ea5e9)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 16,
                                fontWeight: 700,
                                color: "#ffffff"
                            }}
                        >
                            KS
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: 18 }}>
                                Курьерский Старт
                            </div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#6b7280"
                                }}
                            >
                                Израиль • курьеры • репатрианты
                            </div>
                        </div>
                    </Link>

                    <nav style={{ display: "flex", gap: 12, fontSize: 14 }}>
                        <Link
                            to="/login"
                            style={{ color: "#4b5563", textDecoration: "none" }}
                        >
                            Войти
                        </Link>
                        <Link
                            to="/signup"
                            style={{
                                padding: "6px 12px",
                                borderRadius: 999,
                                background: "#22c55e",
                                color: "#ffffff",
                                textDecoration: "none",
                                fontWeight: 600
                            }}
                        >
                            Регистрация
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Контент */}
            <main
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "32px 24px 48px"
                }}
            >
                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
                        gap: 32,
                        alignItems: "center"
                    }}
                >
                    <div>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "4px 10px",
                                borderRadius: 999,
                                background: "#e5f8f0",
                                border: "1px solid #bbf7d0",
                                fontSize: 12,
                                marginBottom: 12,
                                color: "#166534"
                            }}
                        >
                            Онлайн-инструкция для курьеров в Израиле
                        </div>

                        <h1
                            style={{
                                fontSize: 32,
                                lineHeight: 1.2,
                                margin: "0 0 12px"
                            }}
                        >
                            Путь курьера в Израиле
                            <br />
                            по понятному чек-листу
                        </h1>

                        <p
                            style={{
                                fontSize: 15,
                                color: "#4b5563",
                                marginBottom: 20
                            }}
                        >
                            «Курьерский Старт» — это пошаговая онлайн-инструкция на русском
                            языке, которая помогает новым репатриантам стать курьерами
                            в Израиле и выйти на стабильный доход: от оформления
                            самозанятости и выбора скутера до первой смены.
                        </p>

                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: "0 0 24px",
                                fontSize: 14,
                                color: "#374151"
                            }}
                        >
                            <li style={{ marginBottom: 6 }}>
                                • Чёткий чек-лист: документы, техника, компании, деньги
                            </li>
                            <li style={{ marginBottom: 6 }}>
                                • Практические шаги без воды, на основе реального опыта
                            </li>
                            <li>
                                • Полезные сервисы и контакты на каждом шаге пути
                            </li>
                        </ul>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                            <Link
                                to="/signup"
                                style={{
                                    padding: "10px 18px",
                                    borderRadius: 999,
                                    background:
                                        "linear-gradient(135deg, #22c55e, #0ea5e9)",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontWeight: 700,
                                    fontSize: 14
                                }}
                            >
                                Начать путь курьера
                            </Link>
                            <Link
                                to="/login"
                                style={{
                                    padding: "10px 16px",
                                    borderRadius: 999,
                                    border: "1px solid #d1d5db",
                                    color: "#374151",
                                    textDecoration: "none",
                                    fontSize: 14,
                                    backgroundColor: "#ffffff"
                                }}
                            >
                                Уже есть аккаунт? Войти
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                borderRadius: 16,
                                border: "1px solid #e5e7eb",
                                backgroundColor: "#ffffff",
                                padding: 16,
                                boxShadow: "0 18px 45px rgba(15,23,42,0.08)"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 13,
                                    color: "#6b7280",
                                    marginBottom: 8
                                }}
                            >
                                Пример шагов в чек-листе:
                            </div>
                            <ol
                                style={{
                                    fontSize: 14,
                                    paddingLeft: 18,
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 6,
                                    color: "#374151"
                                }}
                            >
                                <li>Открыть самозанятость (эссек патур / мурше)</li>
                                <li>Выбрать и купить/арендовать скутер</li>
                                <li>Купить экипировку и защиту</li>
                                <li>Заключить договор с курьерской компанией</li>
                                <li>Настроить бухгалтерию и отчётность</li>
                            </ol>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#6b7280",
                                    marginTop: 12
                                }}
                            >
                                Внутри — детальные инструкции и чек-лист с прогрессом,
                                который сохраняется в вашем профиле.
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: 40 }}>
                    <h2 style={{ fontSize: 20, marginBottom: 12 }}>Для кого это</h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: 16,
                            fontSize: 14
                        }}
                    >
                        <div
                            style={{
                                borderRadius: 12,
                                border: "1px solid #e5e7eb",
                                padding: 14,
                                background: "#ffffff"
                            }}
                        >
                            <div style={{ fontWeight: 600, marginBottom: 6 }}>
                                Новые репатрианты
                            </div>
                            <div style={{ color: "#4b5563" }}>
                                Тем, кто только планирует переезд или недавно приехал и
                                хочет быстро начать зарабатывать, не разбираясь в местных
                                нюансах.
                            </div>
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                border: "1px solid #e5e7eb",
                                padding: 14,
                                background: "#ffffff"
                            }}
                        >
                            <div style={{ fontWeight: 600, marginBottom: 6 }}>
                                Уже работающие курьеры
                            </div>
                            <div style={{ color: "#4b5563" }}>
                                Тем, кто хочет навести порядок: в документах, налогах,
                                расходах на скутер и оптимизировать доход.
                            </div>
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                border: "1px solid #e5e7eb",
                                padding: 14,
                                background: "#ffffff"
                            }}
                        >
                            <div style={{ fontWeight: 600, marginBottom: 6 }}>
                                Те, кто ищет понятный план
                            </div>
                            <div style={{ color: "#4b5563" }}>
                                Если тебя пугают бюрократия, иврит и «а с чего вообще
                                начать» — здесь всё разложено по шагам.
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer
                style={{
                    borderTop: "1px solid #e5e7eb",
                    padding: "12px 24px",
                    fontSize: 12,
                    color: "#6b7280",
                    backgroundColor: "#ffffff"
                }}
            >
                <div style={{ maxWidth: 960, margin: "0 auto" }}>
                    © {new Date().getFullYear()} Курьерский Старт. Неформальная
                    инструкция на основе личного опыта работы курьером в Израиле.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
