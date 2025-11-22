// src/partners.ts

export type Partner = {
    id: string;
    name: string;
    description: string;
    url: string;
    steps: string[]; // на какие шаги привязан партнёр
};

export const PARTNERS: Partner[] = [
    {
        id: "yango-deli",
        name: "Yango Deli",
        description: "Курьерская служба. Можно подключаться как самозанятый курьер на скутере.",
        url: "https://example.com/yango-aff",
        steps: ["sign-delivery-company"]  // шаг: заключить договор с компанией доставки
    },
    {
        id: "wolt",
        name: "Wolt",
        description: "Доставка еды, гибкий график, курьер на скутере/авто/велосипеде.",
        url: "https://example.com/wolt-aff",
        steps: ["sign-delivery-company"]
    },
    {
        id: "driving-school",
        name: "Автошкола (пример)",
        description: "Помощь с получением прав категории A/A1.",
        url: "https://example.com/driving-school-aff",
        steps: ["choose-scooter"] // или добавишь отдельный шаг про права, если будет
    },
    {
        id: "accountant",
        name: "Бухгалтер (пример)",
        description: "Ведение отчётности, помощь с עוסק פטור / מורשה.",
        url: "https://example.com/accountant-aff",
        steps: ["open-self-employed", "set-accounting"]
    }
];
