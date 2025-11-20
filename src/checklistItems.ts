// src/checklistItems.ts
export type ChecklistItem = {
    id: string;
    title: string;
    description?: string;
};

export const CHECKLIST_ITEMS: ChecklistItem[] = [
    {
        id: "open-self-employed",
        title: "Открыть самозанятость (эссек патур/мурше)",
        description: "Пойти в мас ахнаса, битуах леуми и мисрад а-мишпатим."
    },
    {
        id: "choose-scooter",
        title: "Выбрать и купить/арендовать скутер",
        description: "Определиться с моделью, бюджетом и страховкой."
    },
    {
        id: "buy-gear",
        title: "Купить экипировку (шлем, защита, дождевик)",
        description: "Чтобы и безопасно, и удобно работать курьером."
    },
    {
        id: "sign-delivery-company",
        title: "Заключить договор с компанией доставки",
        description: "Выбрать сервис и оформить договор."
    },
    {
        id: "set-accounting",
        title: "Настроить бухгалтерию и отчётность",
        description: "Найти бухгалтера и понять, как сдавать отчёты."
    }
];
