// src/pages/app/ChecklistPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { OnboardingChecklist } from "../../components/OnboardingChecklist";

const ChecklistPage: React.FC = () => {
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
                        to="/app/partners"
                        style={{
                            color: "#0a63ff",
                            textDecoration: "none",
                            fontSize: 14,
                            fontWeight: 500
                        }}
                    >
                        Все партнёрские предложения
                    </Link>
                </div>
            </header>

            <main
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "24px 24px 40px"
                }}
            >
                <h1 style={{ fontSize: 24, marginBottom: 12 }}>
                    Мой чек-лист курьера
                </h1>
                <p
                    style={{
                        fontSize: 14,
                        color: "#4b5563",
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
