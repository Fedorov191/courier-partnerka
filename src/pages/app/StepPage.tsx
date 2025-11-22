// src/pages/app/StepPage.tsx


import { Link, useParams } from "react-router-dom";
import { CHECKLIST_ITEMS } from "../../checklistItems";
import { PARTNERS } from "../../partners";

export default function StepPage() {
    const { stepId } = useParams<{ stepId: string }>();

    if (!stepId) {
        return (
            <div style={{ padding: 24 }}>
                <p>Не указан шаг.</p>
                <Link to="/app/checklist">← Назад к чек-листу</Link>
            </div>
        );
    }

    const step = CHECKLIST_ITEMS.find((item) => item.id === stepId);

    const relatedPartners = PARTNERS.filter((partner) =>
        partner.steps.includes(stepId)
    );

    return (
        <div style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
            <p style={{ marginBottom: 16 }}>
                <Link to="/app/checklist" style={{ color: "#4ea1ff" }}>
                    ← Назад к чек-листу
                </Link>
            </p>

            <h1 style={{ marginBottom: 8 }}>
                Шаг: {step ? step.title : stepId}
            </h1>

            {step?.description && (
                <p style={{ marginBottom: 24, opacity: 0.8 }}>
                    {step.description}
                </p>
            )}

            {/* Здесь позже можно сделать детальный текст по шагу */}
            <div style={{ marginBottom: 32 }}>
                <p>
                    Здесь позже будет расширенный контент: подробные инструкции,
                    чек-лист по самому шагу, видео и т.д.
                </p>
            </div>

            <hr style={{ margin: "24px 0" }} />

            <h2 style={{ marginBottom: 16 }}>Партнёрские предложения по этому шагу</h2>

            {relatedPartners.length === 0 && (
                <p>Для этого шага пока нет партнёрских предложений.</p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {relatedPartners.map((partner) => (
                    <div
                        key={partner.id}
                        style={{
                            border: "1px solid #333",
                            borderRadius: 8,
                            padding: 16
                        }}
                    >
                        <h3 style={{ marginBottom: 8 }}>{partner.name}</h3>
                        <p style={{ marginBottom: 12, opacity: 0.85 }}>
                            {partner.description}
                        </p>
                        <a
                            href={partner.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#4ea1ff" }}
                        >
                            Перейти по ссылке
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
