import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Public Route
import Landing from '@/pages/public/Landing';

// Invalid Route
import NotFound from "@/pages/NotFound"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;
