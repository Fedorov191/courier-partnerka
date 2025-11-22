// src/components/OnboardingChecklist.tsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { CHECKLIST_ITEMS } from "../checklistItems";
import { Link } from "react-router-dom";

type ChecklistState = Record<string, boolean>;

export const OnboardingChecklist: React.FC = () => {
    const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
    const [checklist, setChecklist] = useState<ChecklistState>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            try {
                setFirebaseUser(user);

                if (!user) {
                    setChecklist({});
                    setLoading(false);
                    return;
                }

                const userRef = doc(db, "users", user.uid);
                const snap = await getDoc(userRef);

                const defaultState: ChecklistState = {};
                CHECKLIST_ITEMS.forEach((item) => {
                    defaultState[item.id] = false;
                });

                if (snap.exists()) {
                    const data = snap.data() as { checklist?: ChecklistState };
                    const saved = data.checklist || {};
                    const merged = { ...defaultState, ...saved };

                    setChecklist(merged);
                    await setDoc(userRef, { checklist: merged }, { merge: true });
                } else {
                    await setDoc(userRef, { checklist: defaultState });
                    setChecklist(defaultState);
                }
            } catch (err: unknown) {
                console.error(err);
                setError("Ошибка доступа к базе данных. Проверь правила Firestore.");
            } finally {
                setLoading(false);
            }
        });

        return () => unsub();
    }, []);

    const toggle = async (id: string) => {
        if (!firebaseUser) return;

        const updated = { ...checklist, [id]: !checklist[id] };
        setChecklist(updated);

        const userRef = doc(db, "users", firebaseUser.uid);
        await updateDoc(userRef, { checklist: updated });
    };

    if (loading) return <p>Загрузка чек-листа...</p>;
    if (error) return <p style={{ color: "#b91c1c" }}>{error}</p>;
    if (!firebaseUser) return <p>Войдите, чтобы видеть чек-лист.</p>;

    const done = Object.values(checklist).filter(Boolean).length;

    return (
        <div style={{ paddingTop: 12 }}>
            <h2 style={{ fontSize: 20, marginBottom: 8 }}>Чек-лист курьера</h2>
            <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 16 }}>
                Выполнено: <b>{done}</b> из <b>{CHECKLIST_ITEMS.length}</b>
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {CHECKLIST_ITEMS.map((item) => (
                    <li
                        key={item.id}
                        style={{
                            padding: "10px 0",
                            borderBottom: "1px solid #e5e7eb",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 12
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={checklist[item.id] || false}
                            onChange={() => toggle(item.id)}
                            style={{ marginTop: 4 }}
                        />

                        <div>
                            <div style={{ fontWeight: 600, fontSize: 15 }}>
                                <Link
                                    to={`/app/step/${item.id}`}
                                    style={{
                                        color: "#0a63ff",
                                        textDecoration: "none"
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </div>
                            {item.description && (
                                <div
                                    style={{
                                        fontSize: 13,
                                        color: "#4b5563",
                                        marginTop: 4
                                    }}
                                >
                                    {item.description}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
