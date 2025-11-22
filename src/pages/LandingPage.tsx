// src/pages/LandingPage.tsx

import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#020617", // тёмный фон
                color: "#f9fafb",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
        >
            {/* Шапка */}
            <header
                style={{
                    borderBottom: "1px solid #111827",
                    padding: "16px 24px"
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
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                                fontWeight: 700
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
                                    opacity: 0.7
                                }}
                            >
                                Израиль • курьеры • репатрианты
                            </div>
                        </div>
                    </div>

                    <nav style={{ display: "flex", gap: 12, fontSize: 14 }}>
                        <Link
                            to="/login"
                            style={{ color: "#e5e7eb", textDecoration: "none" }}
                        >
                            Войти
                        </Link>
                        <Link
                            to="/signup"
                            style={{
                                padding: "6px 12px",
                                borderRadius: 999,
                                background: "#22c55e",
                                color: "#020617",
                                textDecoration: "none",
                                fontWeight: 600
                            }}
                        >
                            Регистрация
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Основной контент */}
            <main
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "32px 24px 48px"
                }}
            >
                {/* Hero */}
                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
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
                                background: "rgba(15,23,42,0.9)",
                                border: "1px solid #1f2937",
                                fontSize: 12,
                                marginBottom: 12
                            }}
                        >
                            <span
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "999px",
                                    background: "#22c55e"
                                }}
                            />
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
                            без хаоса и лишних нервов
                        </h1>

                        <p
                            style={{
                                fontSize: 15,
                                opacity: 0.85,
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
                                opacity: 0.9
                            }}
                        >
                            <li style={{ marginBottom: 6 }}>
                                • Пошаговый чек-лист: документы, техника, компании, деньги
                            </li>
                            <li style={{ marginBottom: 6 }}>
                                • Практические инструкции без воды, на основе реального опыта
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
                                    color: "#020617",
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
                                    border: "1px solid #374151",
                                    color: "#e5e7eb",
                                    textDecoration: "none",
                                    fontSize: 14
                                }}
                            >
                                Уже есть аккаунт? Войти
                            </Link>
                        </div>
                    </div>

                    {/* Правая колонка — “карточка” с шагами */}
                    <div>
                        <div
                            style={{
                                borderRadius: 16,
                                border: "1px solid #1f2937",
                                background:
                                    "radial-gradient(circle at top, rgba(34,197,94,0.22), transparent 55%), #020617",
                                padding: 16,
                                boxShadow: "0 18px 45px rgba(0,0,0,0.55)"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 13,
                                    opacity: 0.8,
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
                                    gap: 6
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
                                    opacity: 0.75,
                                    marginTop: 12
                                }}
                            >
                                Внутри — детальные инструкции и чек-лист с прогрессом,
                                который сохраняется в вашем профиле.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Блок "Для кого" */}
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
                                border: "1px solid #111827",
                                padding: 14,
                                background: "#020617"
                            }}
                        >
                            <div style={{ fontWeight: 600, marginBottom: 6 }}>
                                Новые репатрианты
                            </div>
                            <div style={{ opacity: 0.85 }}>
                                Тем, кто только планирует переезд или недавно приехал и
                                хочет быстро начать зарабатывать, не разбираясь в местных
                                нюансах.
                            </div>
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                border: "1px solid #111827",
                                padding: 14,
                                background: "#020617"
                            }}
                        >
                            <div style={{ fontWeight: 600, marginBottom: 6 }}>
                                Уже работающие курьеры
                            </div>
                            <div style={{ opacity: 0.85 }}>
                                Тем, кто хочет навести порядок: в документах, налогах,
                                расходах на скутер и оптимизировать доход.
                            </div>
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                border: "1px solid #111827",
                                padding: 14,
                                background: "#020617"
                            }}
                        >
                            <div style={{ fontWeight: 600, marginBottom: 6 }}>
                                Те, кто ищет понятный план
                            </div>
                            <div style={{ opacity: 0.85 }}>
                                Если тебя пугают бюрократия, иврит и «а с чего вообще
                                начать» — здесь всё разложено по шагам.
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Футер */}
            <footer
                style={{
                    borderTop: "1px solid #111827",
                    padding: "12px 24px",
                    fontSize: 12,
                    opacity: 0.65
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
