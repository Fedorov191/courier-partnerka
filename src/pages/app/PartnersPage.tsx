// src/pages/app/PartnersPage.tsx


import { Link } from "react-router-dom";
import { PARTNERS } from "../../partners";
import { CHECKLIST_ITEMS } from "../../checklistItems";

export default function PartnersPage() {
    // чтобы по id шагов показывать человекочитаемые названия
    const stepTitleById = new Map(
        CHECKLIST_ITEMS.map((item) => [item.id, item.title])
    );

    return (
        <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24
                }}
            >
                <h1 style={{ margin: 0 }}>Партнёрские предложения</h1>

                <Link to="/app/checklist" style={{ color: "#4ea1ff" }}>
                    ← К чек-листу
                </Link>
            </div>

            <p style={{ marginBottom: 24, opacity: 0.85 }}>
                Здесь собраны все партнёры, с которыми ты можешь работать на
                разных этапах запуска работы курьером. Позже сюда добавим реальные
                ссылки и условия.
            </p>

            {PARTNERS.length === 0 && (
                <p>Пока нет ни одного партнёра. Добавим позже.</p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {PARTNERS.map((partner) => (
                    <div
                        key={partner.id}
                        style={{
                            border: "1px solid #333",
                            borderRadius: 12,
                            padding: 16
                        }}
                    >
                        <h2 style={{ marginBottom: 8 }}>{partner.name}</h2>

                        <p style={{ marginBottom: 12, opacity: 0.85 }}>
                            {partner.description}
                        </p>

                        {partner.steps && partner.steps.length > 0 && (
                            <p
                                style={{
                                    fontSize: 14,
                                    opacity: 0.8,
                                    marginBottom: 12
                                }}
                            >
                                Подходит для шагов:
                                {" "}
                                {partner.steps
                                    .map((stepId) => stepTitleById.get(stepId) || stepId)
                                    .join(", ")}
                            </p>
                        )}

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
