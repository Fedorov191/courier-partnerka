import React from "react";
import { Link } from "react-router-dom";
import { OnboardingChecklist } from "../../components/OnboardingChecklist";

const ChecklistPage: React.FC = () => {
    return (
        <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16
                }}
            >
                <h1 style={{ margin: 0 }}>Мой чек-лист курьера</h1>

                <Link to="/app/partners" style={{ color: "#4ea1ff" }}>
                    Все партнёрские предложения
                </Link>
            </div>

            <OnboardingChecklist />
        </div>
    );
};

export default ChecklistPage;
