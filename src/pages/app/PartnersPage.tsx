// src/pages/app/PartnersPage.tsx

import { Link } from "react-router-dom";
import { PARTNERS } from "../../partners";
import { CHECKLIST_ITEMS } from "../../checklistItems";

export default function PartnersPage() {
    const stepTitleById = new Map(
        CHECKLIST_ITEMS.map((item) => [item.id, item.title])
    );

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
                        to="/app/checklist"
                        style={{
                            color: "#0a63ff",
                            textDecoration: "none",
                            fontSize: 14
                        }}
                    >
                        ← К чек-листу
                    </Link>

                    <span style={{ fontSize: 14, color: "#6b7280" }}>
                        Партнёрские предложения
                    </span>
                </div>
            </header>

            <main
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "24px 24px 40px"
                }}
            >
                <h1 style={{ fontSize: 22, marginBottom: 10 }}>
                    Партнёрские предложения
                </h1>

                <p
                    style={{
                        fontSize: 14,
                        color: "#4b5563",
                        marginBottom: 20
                    }}
                >
                    Здесь собраны сервисы и контакты, которые помогают на разных
                    этапах пути курьера: от открытия самозанятости до выбора
                    курьерской компании.
                </p>

                {PARTNERS.length === 0 && (
                    <p>Пока нет ни одного партнёра. Добавим позже.</p>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {PARTNERS.map((partner) => (
                        <div
                            key={partner.id}
                            style={{
                                borderRadius: 12,
                                border: "1px solid #e5e7eb",
                                padding: 16,
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 6px rgba(15,23,42,0.04)"
                            }}
                        >
                            <h2 style={{ fontSize: 18, marginBottom: 6 }}>
                                {partner.name}
                            </h2>

                            <p
                                style={{
                                    fontSize: 14,
                                    color: "#4b5563",
                                    marginBottom: 10
                                }}
                            >
                                {partner.description}
                            </p>

                            {partner.steps && partner.steps.length > 0 && (
                                <p
                                    style={{
                                        fontSize: 13,
                                        color: "#6b7280",
                                        marginBottom: 10
                                    }}
                                >
                                    Подходит для шагов:{" "}
                                    {partner.steps
                                        .map(
                                            (stepId) =>
                                                stepTitleById.get(stepId) || stepId
                                        )
                                        .join(", ")}
                                </p>
                            )}

                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "#0a63ff", fontSize: 14 }}
                            >
                                Перейти по ссылке
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
