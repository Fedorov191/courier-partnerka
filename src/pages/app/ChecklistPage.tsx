import React from "react";
import { Link } from "react-router-dom";
import { OnboardingChecklist } from "../../components/OnboardingChecklist";

const ChecklistPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#020617",
                color: "#f9fafb",
                fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
        >
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
                        justifyContent: "space-between",
                        alignItems: "center"
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
                        to="/app/partners"
                        style={{ color: "#4ea1ff", textDecoration: "none", fontSize: 14 }}
                    >
                        Все партнёрские предложения
                    </Link>
                </div>
            </header>

            <main
                style={{
                    padding: "24px 24px 40px",
                    maxWidth: "100%"
                }}
            >
                <h1 style={{ fontSize: 24, marginBottom: 12 }}>
                    Мой чек-лист курьера
                </h1>
                <p
                    style={{
                        fontSize: 14,
                        opacity: 0.8,
                        marginBottom: 20
                    }}
                >
                    Отмечай выполненные шаги и возвращайся к ним в любое время. Прогресс
                    сохраняется в твоём аккаунте.
                </p>

                <OnboardingChecklist />
            </main>
        </div>
    );
};

export default ChecklistPage;
