// scripts/exportMailingList.cjs
const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const XLSX = require("xlsx");
const serviceAccount = require("../serviceAccountKey.json"); // путь к ключу

// 1) Инициализация admin SDK
initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

async function exportMailingList() {
    console.log("⏳ Загружаем всех пользователей...");

    // БЕЗ фильтра по notifications — берём всех
    const snapshot = await db.collection("users").get();

    const rows = [];

    snapshot.forEach((doc) => {
        const data = doc.data();

        const notifications = Boolean(data.notifications);

        // email показываем только тем, кто разрешил рассылку
        const email = notifications ? (data.email || "") : "";

        // createdAt — Firestore Timestamp → ISO-строка
        let createdAt = "";
        if (data.createdAt && typeof data.createdAt.toDate === "function") {
            createdAt = data.createdAt.toDate().toISOString();
        }

        // чек-лист: объект вида { stepId: true/false }
        const checklist = data.checklist || {};
        const allStepIds = Object.keys(checklist);
        const totalSteps = allStepIds.length;
        const doneSteps = allStepIds.filter((id) => checklist[id]).length;
        const progressPercent =
            totalSteps > 0 ? Math.round((doneSteps / totalSteps) * 100) : 0;

        rows.push({
            userId: doc.id,
            email,
            createdAt,
            notifications,
            doneSteps,
            totalSteps,
            progressPercent,
        });
    });

    console.log(`✔ Найдено ${rows.length} пользователей.`);

    // --- 2) CSV ---
    const csvHeader =
        "userId,email,createdAt,notifications,doneSteps,totalSteps,progressPercent";
    const csvLines = rows.map((row) => {
        return [
            row.userId,
            row.email,
            row.createdAt,
            row.notifications,
            row.doneSteps,
            row.totalSteps,
            row.progressPercent,
        ].join(",");
    });

    const csvContent = [csvHeader, ...csvLines].join("\n");
    fs.writeFileSync("mailing_list.csv", csvContent, "utf8");
    console.log("📄 Файл mailing_list.csv создан.");

    // --- 3) Excel (.xlsx) ---
    const excelData = [
        [
            "userId",
            "email",
            "createdAt",
            "notifications",
            "doneSteps",
            "totalSteps",
            "progressPercent",
        ],
        ...rows.map((row) => [
            row.userId,
            row.email,
            row.createdAt,
            row.notifications,
            row.doneSteps,
            row.totalSteps,
            row.progressPercent,
        ]),
    ];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "MailingList");
    XLSX.writeFile(workbook, "mailing_list.xlsx");
    console.log("📊 Файл mailing_list.xlsx создан.");

    console.log("✅ Готово.");
}

exportMailingList().catch((err) => {
    console.error("Ошибка при экспорте:", err);
    process.exit(1);
});
