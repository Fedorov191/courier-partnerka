import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ChecklistPage from './pages/app/ChecklistPage';
import StepPage from './pages/app/StepPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Routes>
            {/* Публичные страницы */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Приложение после логина */}
            <Route
                path="/app/checklist"
                element={
                    <ProtectedRoute>
                        <ChecklistPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/app/step/:stepId"
                element={
                    <ProtectedRoute>
                        <StepPage />
                    </ProtectedRoute>
                }
            />

            {/* Все остальные пути → на главную */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
