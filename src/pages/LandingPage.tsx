// src/pages/LandingPage.tsx
import React from "react";
import {Link} from "react-router-dom";

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
                            <div style={{fontWeight: 700, fontSize: 18}}>
                                Курьерский Старт
                            </div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#6b7280"
                                }}
                            >
                                Израиль • работа курьером • репатрианты
                            </div>
                        </div>
                    </Link>

                    <nav style={{display: "flex", gap: 12, fontSize: 14}}>
                        <Link
                            to="/login"
                            style={{color: "#4b5563", textDecoration: "none"}}
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
                    {/* Левая колонка — оффер */}
                    <div>
                        {/* Бейдж с доходом */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "4px 10px",
                                borderRadius: 999,
                                background: "#ecfdf3",
                                border: "1px solid #bbf7d0",
                                fontSize: 12,
                                marginBottom: 12,
                                color: "#166534",
                                fontWeight: 500
                            }}
                        >
                            Доход курьера: примерно 10 000–25 000 ₪ в месяц*
                        </div>

                        <h1
                            style={{
                                fontSize: 30,
                                lineHeight: 1.25,
                                margin: "0 0 12px"
                            }}
                        >
                            Хочешь{" "}
                            <span style={{color: "#15803d"}}>
                                высокооплачиваемую работу
                            </span>{" "}
                            в Израиле
                            <br/>
                            даже без иврита?
                        </h1>

                        <p
                            style={{
                                fontSize: 15,
                                color: "#4b5563",
                                marginBottom: 20
                            }}
                        >
                            <b>Курьерская работа</b> — один из самых быстрых способов
                            начать зарабатывать в Израиле: без идеального иврита,
                            без «связей» и долгих собеседований.
                            <br/>
                            «Курьерский Старт» показывает пошагово, как выйти на
                            доход в районе{" "}
                            <span style={{whiteSpace: "nowrap"}}>
        <b>10 000–25 000 ₪</b>
    </span>{" "}
                            в месяц в роли самозанятого курьера.
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
                            <li style={{marginBottom: 6}}>
                                • Реальные цифры: на что влияет доход и чего ждать от
                                3–6 смен в неделю
                            </li>
                            <li style={{marginBottom: 6}}>
                                • Пошаговый план: от документов и скутера до первой
                                смены и стабильного графика
                            </li>
                            <li>
                                • Актуально для новых репатриантов: всё на русском,
                                с пояснениями по израильским реалиям
                            </li>
                        </ul>

                        <div style={{display: "flex", flexWrap: "wrap", gap: 12}}>
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
                                Начать курьерский старт
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

                        <div
                            style={{
                                marginTop: 10,
                                fontSize: 11,
                                color: "#6b7280"
                            }}
                        >
                            *Цифры примерные и зависят от количества смен, города,
                            компании доставки, расходов на скутер и твоей скорости.
                        </div>
                    </div>

                    {/* Правая колонка — пример чек-листа и дохода */}
                    <div>
                        <div
                            style={{
                                borderRadius: 16,
                                border: "1px solid #e5e7eb",
                                backgroundColor: "#ffffff",
                                padding: 16,
                                boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
                                marginBottom: 16
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 13,
                                    color: "#6b7280",
                                    marginBottom: 6,
                                    fontWeight: 500
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
                                <li>Подключиться к курьерским компаниям</li>
                                <li>Настроить бухгалтерию и отчётность</li>
                            </ol>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#6b7280",
                                    marginTop: 10
                                }}
                            >
                                Каждый шаг можно отмечать галочками — прогресс
                                сохраняется в личном кабинете.
                            </div>
                        </div>

                        <div
                            style={{
                                borderRadius: 16,
                                border: "1px solid #e5e7eb",
                                backgroundColor: "#ffffff",
                                padding: 16,
                                boxShadow: "0 18px 45px rgba(15,23,42,0.06)"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 13,
                                    color: "#6b7280",
                                    marginBottom: 8,
                                    fontWeight: 500
                                }}
                            >
                                Примеры возможного дохода*:
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 6,
                                    fontSize: 13,
                                    color: "#374151"
                                }}
                            >
                                <div>
                                    <b>3–4 смены в неделю</b> — около{" "}
                                    <b>10 000–14 000 ₪</b> до вычета расходов
                                </div>
                                <div>
                                    <b>5–6 смен в неделю</b> — около{" "}
                                    <b>18 000–25 000 ₪</b> до вычета расходов
                                </div>
                                <div style={{fontSize: 11, color: "#6b7280"}}>
                                    Это не гарантированные суммы, а реальный ориентир,
                                    если нормально работать и не «проваливаться» по
                                    сменам.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Блок "Для кого" */}
                <section style={{marginTop: 40}}>
                    <h2 style={{fontSize: 20, marginBottom: 12}}>Для кого это</h2>
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
                            <div style={{fontWeight: 600, marginBottom: 6}}>
                                Новые репатрианты
                            </div>
                            <div style={{color: "#4b5563"}}>
                                Ты только планируешь переезд или недавно приехал и хочешь
                                быстро выйти на нормальный доход, не разбираясь в
                                бюрократии с нуля.
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
                            <div style={{fontWeight: 600, marginBottom: 6}}>
                                Те, кто плохо говорит на иврите
                            </div>
                            <div style={{color: "#4b5563"}}>
                                Курьер — одна из немногих профессий, где можно зарабатывать
                                нормально, пока иврит только в процессе изучения.
                                Инструкция полностью на русском.
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
                            <div style={{fontWeight: 600, marginBottom: 6}}>
                                Уже работающие курьеры
                            </div>
                            <div style={{color: "#4b5563"}}>
                                Если ты уже развозишь заказы, но хочешь разобраться с
                                налогами, расходами на скутер и выйти на более стабильный
                                доход — чек-лист поможет навести порядок.
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
                <div style={{maxWidth: 960, margin: "0 auto"}}>
                    © {new Date().getFullYear()} Курьерский Старт. Неформальная
                    инструкция на основе личного опыта работы курьером в Израиле.
                    Доход зависит от твоей нагрузки, города, компании и расходов.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
