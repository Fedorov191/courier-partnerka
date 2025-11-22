
import { Link, useParams } from "react-router-dom";
import { CHECKLIST_ITEMS } from "../../checklistItems";
import { PARTNERS } from "../../partners";

export default function StepPage() {
    const { stepId } = useParams<{ stepId: string }>();

    if (!stepId) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "#020617",
                    color: "#f9fafb",
                    padding: 24
                }}
            >
                <p>Не указан шаг.</p>
                <Link to="/app/checklist" style={{ color: "#4ea1ff" }}>
                    ← Назад к чек-листу
                </Link>
            </div>
        );
    }

    const step = CHECKLIST_ITEMS.find((item) => item.id === stepId);
    const relatedPartners = PARTNERS.filter((partner) =>
        partner.steps.includes(stepId)
    );

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
                        to="/app/checklist"
                        style={{
                            color: "#f9fafb",
                            textDecoration: "none",
                            fontSize: 14
                        }}
                    >
                        ← К чек-листу
                    </Link>

                    <Link
                        to="/app/partners"
                        style={{ color: "#4ea1ff", textDecoration: "none", fontSize: 14 }}
                    >
                        Партнёры
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
                <h1 style={{ fontSize: 22, marginBottom: 8 }}>
                    {step ? step.title : `Шаг: ${stepId}`}
                </h1>

                {step?.description && (
                    <p
                        style={{
                            fontSize: 14,
                            opacity: 0.8,
                            marginBottom: 20
                        }}
                    >
                        {step.description}
                    </p>
                )}

                <div style={{ marginBottom: 32, fontSize: 14, opacity: 0.9 }}>
                    <p>
                        Здесь позже будет расширенный контент по этому шагу: подробные
                        инструкции, чек-листы внутри шага, видео и полезные советы.
                    </p>
                </div>

                <hr style={{ borderColor: "#111827", margin: "24px 0" }} />

                <h2 style={{ fontSize: 18, marginBottom: 12 }}>
                    Партнёрские предложения по этому шагу
                </h2>

                {relatedPartners.length === 0 && (
                    <p style={{ fontSize: 14, opacity: 0.8 }}>
                        Для этого шага пока нет партнёрских предложений.
                    </p>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {relatedPartners.map((partner) => (
                        <div
                            key={partner.id}
                            style={{
                                borderRadius: 12,
                                border: "1px solid #111827",
                                padding: 16,
                                background: "#020617"
                            }}
                        >
                            <h3 style={{ marginBottom: 6, fontSize: 16 }}>
                                {partner.name}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    opacity: 0.85,
                                    marginBottom: 10
                                }}
                            >
                                {partner.description}
                            </p>
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "#4ea1ff", fontSize: 14 }}
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
