import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFbd86KfI96OTiD5b9KgmxO1AnrXrIf9M",
    authDomain: "courier-partnerka-7e47c.firebaseapp.com",
    projectId: "courier-partnerka-7e47c",
    storageBucket: "courier-partnerka-7e47c.firebasestorage.app",
    messagingSenderId: "698979573002",
    appId: "1:698979573002:web:237b93debf43d511032ef3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
